import { useState, useEffect } from "react";
import { getEvents } from "../../utilities/events-api";
import { ListGroup } from "react-bootstrap";
import EventCard from '../../components/EventCard/EventCard'

export default function EventFeed() {
  const [events, setEvents] = useState([]);
  useEffect(function() {
    async function getAllEvents() {
      const allEvents = await getEvents();
      setEvents(allEvents)
    }
    getAllEvents();
  }, [])
  const EventCards = events.map(e => <EventCard event={e} key={e._id} />)
  return (
    <ListGroup>
      {EventCards}
    </ListGroup>   
  );
}