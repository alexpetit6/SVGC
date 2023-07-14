import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import ActionButton from "../ActionButton/ActionButton"

export default function EventCard({ event }) {
  return (
    <ListGroup.Item>
      <Card>
        <Card.Body>
          <Card.Title><h1 className='display-4'>{event.title}</h1></Card.Title>
          <Card.Text>{event.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text><strong>Date:</strong> {event.date}</Card.Text>
          <Card.Text><strong>Time:</strong> {event.standardClock}</Card.Text>
          <Card.Text><strong>Event Location:</strong> {event.location}</Card.Text>
          <ActionButton action='remove' id={event.id} />
          <ActionButton action='update' id={event.id} />
        </Card.Body>
      </Card>
    </ListGroup.Item>
  )
}