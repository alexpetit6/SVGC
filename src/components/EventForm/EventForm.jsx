import './EventForm.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function EventForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    photo: '',
    date: ''
  });
  const [isChecked, setIsChecked] = useState(false)
  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }
  function handleCheck(evt) {
    setIsChecked(!isChecked)
  }
  return (
    <Form className='event-form'>
      <Form.Check // prettier-ignore
        type="checkbox"
        id="checkbox-default"
        label="Is this a meeting?"
        onChange={handleCheck}
        checked={isChecked}
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

