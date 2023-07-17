import '../EventForm/EventForm.css'
import { useState, useRef } from "react"
import { upload } from "../../utilities/photos-api"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PhotoForm({ setPhotos }) {
  const [title, setTitle] = useState('');
  const fileInputRef = useRef();

  async function handleUpload(evt) {
    evt.preventDefault();

  }

  return (
    <Form className='event-form' onSubmit={handleUpload}>
      <Form.Group className="mb-3" controlId="photoForm.title">
        <Form.Label>Photo Title</Form.Label>
        <Form.Control 
          onChange={(evt) => setTitle(evt.target.value)}
          value={title} 
          type='text'
          placeholder='Enter Title'
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="photoForm.file">
        <Form.Label>Meeting Time</Form.Label>
        <Form.Control type='file' ref={fileInputRef} />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type='submit' variant="success" size="lg">
          Add Photo!
        </Button>
      </div>
    </Form>
  );
}