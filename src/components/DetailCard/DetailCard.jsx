import './DetailCard.css'
import ListGroup from "react-bootstrap/ListGroup"

export default function DetailCard({ event }) {
  return (
    <>
      <ListGroup.Item>{event.title}</ListGroup.Item>
      <ListGroup.Item ><img className="event-img" src={event.photo} alt={event.title} /></ListGroup.Item>
      <ListGroup.Item>{event.description}</ListGroup.Item>
      <ListGroup.Item>{event.location}</ListGroup.Item>
      <ListGroup.Item>{event.formDate}</ListGroup.Item>
      <ListGroup.Item>{event.standardClock}</ListGroup.Item>
    </>
  )
}