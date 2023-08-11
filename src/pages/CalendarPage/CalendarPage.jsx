import { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from "../../utilities/events-api";
import dayjs from "dayjs";
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
  

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="date"
        endAccessor="date"
        events={events}
        views={{month: true}}
        style={{ height: '100vmin' }}
      />
    </div>
  )
}