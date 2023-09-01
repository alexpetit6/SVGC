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
          <Link to={`/events/${event.id}`}>
            <Card.Header><h1 className='display-4'>{event.title}</h1></Card.Header>
          </Link>
        <Card.Body id='event-body'>
          <Card.Text>{event.description}</Card.Text>
          <div className='card-date'>
            <h1>{event.displayDate.slice(0, 4)}</h1>
            <h3>{event.displayDate.slice(4)}</h3>
          </div>
          <Card.Text><strong>Time:</strong> {event.standardClock}</Card.Text>
          <Card.Text><strong>Event Location:</strong> {event.location}</Card.Text>
          {
            user
            ?
            <>
            <ActionButton action='deleteEvt' id={event.id} setterFunc={setEvents} />
            <Button className='action-button' variant='warning' size='sm'><Link to={`/events/new/${event.id}`}>EDIT</Link></Button>
            </>
            :
            null
          }
        </Card.Body>
      </Card>
    </ListGroup.Item>
  )
}