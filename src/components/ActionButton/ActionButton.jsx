import "./ActionButton.css"
import Button from "react-bootstrap/Button"
import { deleteEvent } from "../../utilities/events-api"
import { deletePhoto } from "../../utilities/photos-api";

export default function ActionButton({ action, id, setterFunc }) {
  const request = {
    deleteEvt: {variant: 'danger', type: 'DELETE', func: deleteEvent},
    deleteImg: {variant: 'danger', type: 'DELETE', func: deletePhoto},
  };
  async function handleAction(id) {
   const items = await request[action].func(id);
   setterFunc(items); 
  }
  return (
    <Button className="action-button" variant={request[action].variant} onClick={() => handleAction(id)} size='sm'>{request[action].type}</Button>
  )
}