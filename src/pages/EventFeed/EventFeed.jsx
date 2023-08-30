import { useState, useEffect } from "react";
import { getEvents } from "../../utilities/events-api";
import { ListGroup } from "react-bootstrap";
import EventCard from '../../components/EventCard/EventCard'

export default function EventFeed({user}) {
  const [events, setEvents] = useState([]);
  const [scroll, setScroll] = useState(0);
  useEffect(function() {
    async function getAllEvents() {
      const allEvents = await getEvents();
      setEvents(allEvents)
    }
    getAllEvents();
  }, [])
  function getScrollY() {
    setScroll(window.scrollY)
  }
  window.addEventListener('scroll', getScrollY)
  const EventCards = events.map(e => <EventCard event={e} key={e._id} setEvents={setEvents} user={user}/>)
  return (
    <>
    <ListGroup>
      {EventCards}
    </ListGroup>
    <h1> {scroll} </h1>  
    </>
  );
}