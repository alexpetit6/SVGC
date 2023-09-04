import './EventDetailPage.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { eventDetail } from "../../utilities/events-api";
import ListGroup from "react-bootstrap/ListGroup"
import EventCard from '../../components/EventCard/EventCard';

export default function EventDetailPage() {
  const [event, setEvent] = useState();
  const { eventId } = useParams();

  useEffect(function() {
    async function getEvent() {
      const e = await eventDetail(eventId);
      // console.log(e)
      setEvent(e);
    }
    getEvent();
  }, []);
  console.log(event)
  
  if(event) {
    return (
      <ListGroup id='detail-list'>
        <ListGroup.Item className='text-center'>{event.displayDate} {event.standardClock} <br /> {event.location}</ListGroup.Item>
        <ListGroup.Item ><img className="event-img" src={event.photo} alt={event.title} /></ListGroup.Item>
        <ListGroup.Item>{event.description}</ListGroup.Item>
      </ListGroup>
    )
  }
}