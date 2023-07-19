import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { eventDetail } from "../../utilities/events-api";
import ListGroup from "react-bootstrap/ListGroup"
import DetailCard from "../../components/DetailCard/DetailCard";

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
      <ListGroup>
        <DetailCard event={event} />
      </ListGroup>
    )
  }
}