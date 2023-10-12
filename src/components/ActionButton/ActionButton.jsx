import "./ActionButton.css"
import Button from "react-bootstrap/Button"
import { deleteEvent } from "../../utilities/events-api"
import { deletePhoto, archivePhoto } from "../../utilities/photos-api";
import { deletePost } from "../../utilities/posts-api";

export default function ActionButton({ action, id, setterFunc, className }) {
  const request = {
    deleteEvt: {variant: 'danger', btnText: 'DELETE', func: deleteEvent},
    deleteImg: {variant: 'danger', btnText: 'DELETE', func: deletePhoto},
    deletePost: {variant: 'danger', btnText: 'DELETE', func: deletePost},
    archiveImg: {variant: 'warning', btnText: 'ARCHIVE', func: archivePhoto},
  };
  async function handleAction(id) {
    const items = await request[action].func(id);
    setterFunc(items); 
  }
  return (
    <Button className={className} variant={request[action].variant} onClick={() => handleAction(id)} size='sm'>{request[action].btnText}</Button>
  )
}