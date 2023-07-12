import './EventForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function EventForm() {
  const [formData, setFormData] = useState({
    theCheckbox: true,
    theTextInput: 'some text'
  });
  function handleChange(evt) {
    const val = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    setFormData({
      ...formData,
      [evt.target.name]: val
    });
  }
  return (
    <Form className='event-form'>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Group className="mb-3" controlId="eventForm.title">
        <Form.Label>Event Title</Form.Label>
        <Form.Control name='text' type="text" placeholder="Enter a Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.photo">
        <Form.Label>Image Url</Form.Label>
        <Form.Control name='photo' type='text' placeholder='Paste in Image URL' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.description">
        <Form.Label>Event Description</Form.Label>
        <Form.Control name='description' as="textarea" rows={4} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.date">
        <Form.Label>Image Url</Form.Label>
        <Form.Control name='date' type='text' placeholder='Paste in Image URL' />
      </Form.Group>
    </Form>
  )
}

