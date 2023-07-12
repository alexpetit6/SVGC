import { ListGroup, Card } from "react-bootstrap";

export default function EventCard({ event }) {
  return (
    <ListGroup.Item>
      <Card>
        <Card.Body>
          <Card.Title><h1 className='display-4'>{event.title}</h1></Card.Title>
          <Card.Text>{event.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text><strong>Date & Time:</strong> {event.date}</Card.Text>
          <Card.Text><strong>Event Location:</strong> {event.location}</Card.Text>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  )
}