import './EventForm.css'
import { useParams } from 'react-router-dom';
import { create, eventDetail, update } from '../../utilities/events-api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useRef } from 'react';

export default function EventForm() {
  const { eventId } = useParams();
  const baseData = {
    title: '',
    description: '',
    location: '',
    // photo: '',
    date: '',
    time: '',
  }
  const [formData, setFormData] = useState(baseData);
  const [isChecked, setIsChecked] = useState(false);
  const fileInputRef = useRef();

  useEffect(function () {
    if (eventId) {
      async function getEvent() {
        const event = await eventDetail(eventId);
        setFormData({
          title: event.title,
          description: event.description,
          location: event.location,
          photo: event.photo,
          date: event.formDate,
          time: event.time,
        });
      }
      getEvent();
    }
  }, [])

  
  async function handleSubmit(evt) {
    evt.preventDefault();
    const newFormData = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    }
    console.log(newFormData)
    if (eventId) {
      const updatedEvent = await update(eventId, formData)
      console.log(updatedEvent)
    } else {
      // newFormData.append('title', formData.title);
      // newFormData.append('description', formData.description);
      // newFormData.append('location', formData.location);
      // newFormData.append('photo', fileInputRef.current[0]);
      // newFormData.append('date', formData.date);
      // newFormData.append('time', formData.time);
      await create(newFormData);
      setFormData(baseData);
    }
  }
  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
    // const newFormData = new FormData(form);
  }
  function handleCheck(evt) {
    setIsChecked(!isChecked);
  }

  return (
    isChecked
    ?
    <Form onSubmit={handleSubmit} className='event-form' id='event-form'>
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
        <Form.Control type='file' ref={fileInputRef} />
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
          value={formData.location}
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

