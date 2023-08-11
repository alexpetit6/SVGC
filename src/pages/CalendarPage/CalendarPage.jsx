import { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from "../../utilities/events-api";
import dayjs from "dayjs";
import CustomEvent from "../../components/CustomEvent/CustomEvent";
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault('America/Los_Angeles')

const localizer = dayjsLocalizer(dayjs)

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  useEffect(function() {
    async function getAllEvents() {
      const allEvents = await getEvents();
      setEvents(allEvents)
    }
    getAllEvents();
  }, []);
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.color || 'purple'; // Default color if not provided
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '1px solid #3174ad',
      display: 'block',
      padding: '5px',
    };
    return { style };
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="date"
        endAccessor="date"
        events={events}
        views={{month: true}}
        style={{ height: '100vmin' }}
        components={{event: CustomEvent}}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  )
}