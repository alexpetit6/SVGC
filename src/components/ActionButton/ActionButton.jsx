import "./ActionButton.css"
import Button from "react-bootstrap/Button"
import { deleteEvent } from "../../utilities/events-api"
import { deletePhoto, archivePhoto } from "../../utilities/photos-api";
import { update } from "../../utilities/community-api";

export default function ActionButton({ action, id, setterFunc, className, newData }) {
  const request = {
    deleteEvt: {variant: 'danger', btnText: 'DELETE', func: deleteEvent},
    deleteImg: {variant: 'danger', btnText: 'DELETE', func: deletePhoto},
    archiveImg: {variant: 'warning', btnText: 'ARCHIVE', func: archivePhoto},
    editCommunity: {variant: 'warning', btnText: 'EDIT', func: update}
  };
  async function handleAction(id, newData) {
    if (newData) {
      const items = await request[action].func(newData);
      setterFunc(items); 
    } else {
      const items = await request[action].func(id);
      setterFunc(items); 
    }
  }
  return (
    <Button className={className} variant={request[action].variant} onClick={() => handleAction(id, newData)} size='sm'>{request[action].btnText}</Button>
  )
}