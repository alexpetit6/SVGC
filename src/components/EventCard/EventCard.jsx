import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import ActionButton from "../ActionButton/ActionButton"
import { Link } from "react-router-dom";

export default function EventCard({ event, setEvents, user }) {
  return (
    <ListGroup.Item>
      <Card>
        <Card.Body>
          <Link to={`/events/${event.id}`}>
            <Card.Title><h1 className='display-4'>{event.title}</h1></Card.Title>
          </Link>
          <Card.Text>{event.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text><strong>Date:</strong> {event.formDate}</Card.Text>
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