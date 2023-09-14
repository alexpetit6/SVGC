import "./ActionButton.css"
import Button from "react-bootstrap/Button"
import { deleteEvent } from "../../utilities/events-api"
import { deletePhoto, archivePhoto } from "../../utilities/photos-api";

export default function ActionButton({ action, id, setterFunc, className }) {
  const request = {
    deleteEvt: {variant: 'danger', type: 'DELETE', func: deleteEvent},
    deleteImg: {variant: 'danger', type: 'DELETE', func: deletePhoto},
    archiveImg: {variant: 'warning', type: 'ARCHIVE', func: archivePhoto}
  };
  async function handleAction(id) {
   const items = await request[action].func(id);
   setterFunc(items); 
  }
  return (
    <Button className={className} variant={request[action].variant} onClick={() => handleAction(id)} size='sm'>{request[action].type}</Button>
  )
}