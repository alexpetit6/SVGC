import './EventForm.css'
import { create } from '../../utilities/events-api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function EventForm() {
  const baseData = {
    title: undefined,
    description: '',
    location: undefined,
    photo: '',
    date: '',
    time: '',
  }
  const [formData, setFormData] = useState(baseData);
  const [isChecked, setIsChecked] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await create(formData);
    setFormData(baseData)
  }
  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }
  function handleCheck(evt) {
    setFormData(baseData)
    setIsChecked(!isChecked)
  }

  return (
    isChecked
    ?
    <Form onSubmit={handleSubmit} className='event-form'>
      <Form.Check
        type="checkbox"
        // id="checkbox-default"
        label="Is this a meeting?"
        onChange={handleCheck}
        checked={isChecked}
      />
      <Form.Group className="mb-3" controlId="eventForm.date">
        <Form.Label>Meeting Date</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          value={formData.date} 
          name='date' 
          type='date' 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.date">
        <Form.Label>Meeting Time</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          value={formData.time} 
          name='time' 
          type='time' 
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type='submit' variant="success" size="lg">
          Create Meeting!
        </Button>
      </div>
    </Form>
    :
    <Form onSubmit={handleSubmit} className='event-form'>
      <Form.Check
        type="checkbox"
        // id="checkbox-default"
        label="Is this a meeting?"
        onChange={handleCheck}
        checked={isChecked}
      />
      <Form.Group className="mb-3" controlId="eventForm.title">
        <Form.Label>Event Title</Form.Label>
        <Form.Control 
          onChange={handleChange}
          value={formData.title}
          name='title' 
          type="text" 
          placeholder="Enter a Title" 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.photo">
        <Form.Label>Image Url</Form.Label>
        <Form.Control 
          onChange={handleChange}
          value={formData.photo}
          name='photo'
          type='text'
          placeholder='Paste in Image URL' 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.description">
        <Form.Label>Event Description</Form.Label>
        <Form.Control 
          onChange={handleChange}
          value={formData.description}
          name='description' 
          as="textarea" 
          rows={4} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.location">
        <Form.Label>Event Location</Form.Label>
        <Form.Control 
          onChange={handleChange}
          value={formData.description}
          name='location'
          type='text'
          placeholder='Enter an Address'
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.date">
        <Form.Label>Event Date</Form.Label>
        <Form.Control 
          onChange={handleChange}
          value={formData.date}
          name='date' 
          type='date' 
          placeholder='Enter Date' 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.date">
        <Form.Label>Event Time</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          value={formData.time} 
          name='time' 
          type='time' 
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button type='submit' variant="success" size="lg">
          Create Event!
        </Button>
      </div>
    </Form>
  )
}

