import { deleteEvent } from "../../utilities/events-api";
import Button from "react-bootstrap/Button"

export default function DeleteButton({ id }) {
  async function handleDelete(id) {
    await deleteEvent(id) 
  }
  return (
    <Button variant='danger' onClick={() => handleDelete(id)} size='sm'>DELETE</Button>
  )
}