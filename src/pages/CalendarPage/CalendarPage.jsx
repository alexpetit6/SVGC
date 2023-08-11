import { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs)

export default function CalendarPage() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vmin' }}
      />
    </div>
  )
}