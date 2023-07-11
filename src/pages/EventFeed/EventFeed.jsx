import { useState, useEffect } from "react";
import { getEvents } from "../../utilities/events-api";

export default function EventFeed() {
  const [events, setEvents] = useState([]);
  useEffect(function() {
    async function getAllEvents() {
      const allEvents = await getEvents();
      setEvents(allEvents)
      console.log(events[0].title)
    }
    getAllEvents();
  }, [])
  return (
    <>
      <h1>{events[0].title}</h1>
    </>
  );
}