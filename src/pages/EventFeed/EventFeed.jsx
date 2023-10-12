import './EventFeed.css'
import { useState, useEffect } from "react";
import { getEvents } from "../../utilities/events-api";
import { ListGroup } from "react-bootstrap";
import EventCard from '../../components/EventCard/EventCard'
import PageHeader from '../../components/PageHeader/PageHeader';

export default function EventFeed({user}) {
  const [events, setEvents] = useState([]);
  const [headerImg, setHeaderImg] = useState(window.innerWidth <= 576 ? '/headers/event-feed-mobile.jpg' : '/headers/event-feed.jpg');

  window.addEventListener('resize', () => window.innerWidth <= 576 ? setHeaderImg('/headers/event-feed-mobile.jpg') : setHeaderImg('/headers/event-feed.jpg') )

  useEffect(function() {
    async function getAllEvents() {
      const allEvents = await getEvents();
      setEvents(allEvents)
    }
    getAllEvents();
  }, [])

  const EventCards = events.map(e => <EventCard event={e} key={e._id} setEvents={setEvents} user={user}/>)

  return (
    <>
    <PageHeader img={headerImg} text='Events' />
    <ListGroup>
      {EventCards}
    </ListGroup>
    </>
  );
}