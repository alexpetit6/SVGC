import "./ActionButton.css"
import Button from "react-bootstrap/Button"
import { deleteEvent, update } from "../../utilities/events-api"
import { deletePhoto } from "../../utilities/photos-api";

export default function ActionButton({ action, id }) {
  const request = {
    deleteEvt: {variant: 'danger', type: 'DELETE', func: deleteEvent},
    deleteImg: {variant: 'danger', type: 'DELETE', func: deletePhoto},
    update: {variant: 'warning', type: 'EDIT', func: update}
  };
  async function handleAction(id) {
    await request[action].func(id) 
  }
  return (
    <Button className="action-button" variant={request[action].variant} onClick={() => handleAction(id)} size='sm'>{request[action].type}</Button>
  )
}