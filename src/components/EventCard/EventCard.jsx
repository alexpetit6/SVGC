import './EventCard.css'
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import ActionButton from "../ActionButton/ActionButton"
import { Link } from "react-router-dom";

export default function EventCard({ event, setEvents, user }) {
  return (
    <ListGroup.Item>
      <Card className='event-card'>
          <Link id='event-link' to={`/events/${event.id}`}>
            <Card.Header id='event-header'>
              <h1>{event.title}</h1>
            </Card.Header>
          </Link>
        <Card.Body id='event-body'>
          {/* <Card.Text>{event.description}</Card.Text> */}
          <div className='card-date'>
            <h1>{event.displayDate.slice(0, 4)}</h1>
            <h3>{event.displayDate.slice(4)}</h3>
          </div>
          <Card.Text className='time-place'>{event.standardClock}</Card.Text>
          <Card.Text className='time-place place'>
            <a href={`https://www.google.com/maps/place/${encodeURI(event.location)}`} target='_blank' rel='noreferrer'>{event.location}</a>
          </Card.Text>
          {
            user
            ?
            <div className='event-buttons'>
              <ActionButton action='deleteEvt' id={event.id} setterFunc={setEvents} />
              <Button variant='warning' size='sm'><Link to={`/events/new/${event.id}`}>EDIT</Link></Button>
            </div>
            :
            null
          }
        </Card.Body>
      </Card>
    </ListGroup.Item>
  )
}