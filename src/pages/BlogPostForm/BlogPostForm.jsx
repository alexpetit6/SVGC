import './BlogPostForm.css';
import { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { create } from '../../utilities/posts-api';


export default function BlogPostForm() {
  const baseData = {
    title: '',
    body: '',
  };
  const [formData, setFormData] = useState(baseData);
  const [isLoading, setLoading] = useState(false);

  const headerInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const newFormData = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    };
    newFormData.append('header', headerInputRef.current.files[0]);
    newFormData.append('gallery', galleryInputRef.current.files[0]);
    newFormData.append('gallery', galleryInputRef.current.files[1]);
    newFormData.append('gallery', galleryInputRef.current.files[2]);
    await create(newFormData);
    setLoading(false);
    setFormData(baseData);
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
          rows={6}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.gallery">
        <Form.Label>Photo Gallery</Form.Label>
        <Form.Control type='file' ref={galleryInputRef} multiple/>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type='submit' variant="success" size="lg" disabled={isLoading}>
          {/* {eventId ? 'Submit Changes' : 'Create New Event!'} */}
          {isLoading ? 'Saving Changes...' : 'SUBMIT'}
        </Button>
      </div>
    </Form>
  )
}