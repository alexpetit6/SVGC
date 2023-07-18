import '../EventForm/EventForm.css'
import { useState, useRef } from "react"
import { upload } from "../../utilities/photos-api"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PhotoForm({ setPhotos, photos }) {
  const [title, setTitle] = useState('');
  const fileInputRef = useRef();

  async function handleUpload(evt) {
    evt.preventDefault();
    const formData = new FormData();
    if (title) formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await upload(formData);
    console.log(formData);
    setPhotos([newPhoto, ...photos]);
    setTitle('');
    fileInputRef.current.value = '';
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