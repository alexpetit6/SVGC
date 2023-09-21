import './BlogPostForm.css';
import { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function BlogPostForm() {
  const baseData = {
    title: '',
    body: '',
  };
  const [formData, setFormData] = useState(baseData);
  const headerInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const newFormData = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    };
    newFormData.append('header', headerInputRef.current.files[0]);
    newFormData.append('gallery', galleryInputRef.current.files);
  }

  return (
    <Form onSubmit={handleSubmit} id='blog-form'>
      <Form.Group className="mb-3" controlId="blogForm.title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          value={formData.title} 
          name='title' 
          type='text' 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.photo">
        <Form.Label>Header Image</Form.Label>
        <Form.Control type='file' ref={headerInputRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="blogForm.body">
        <Form.Label>Body Text</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          value={formData.body} 
          name='body' 
          as='textarea'
          rows={4}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.gallery">
        <Form.Label>Photo Gallery</Form.Label>
        <Form.Control type='file' ref={headerInputRef} multiple/>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type='submit' variant="success" size="lg">
          {/* {eventId ? 'Submit Changes' : 'Create New Event!'} */}
          Submit Changes
        </Button>
      </div>
    </Form>
  )
}