import '../EventForm/EventForm.css'
import { useState, useRef } from "react"
import { upload } from "../../utilities/photos-api"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PhotoForm({ setPhotos, photos }) {
  const [caption, setCaption] = useState('');
  const fileInputRef = useRef();

  async function handleUpload(evt) {
    evt.preventDefault();
    const formData = new FormData();
    if (caption) formData.append('caption', caption);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await upload(formData);
    console.log(formData);
    setPhotos([newPhoto, ...photos]);
    setCaption('');
    fileInputRef.current.value = '';
  }

  return (
    <Form className='event-form' onSubmit={handleUpload}>
      <Form.Group className="mb-3" controlId="photoForm.caption">
        <Form.Label>Photo caption</Form.Label>
        <Form.Control 
          onChange={(evt) => setCaption(evt.target.value)}
          value={caption} 
          type='text'
          placeholder='Enter caption'
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