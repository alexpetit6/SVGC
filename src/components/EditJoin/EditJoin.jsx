import './EditJoin.css';
import { useState } from 'react';
import { update } from '../../utilities/join-api';
import { Form, Button } from 'react-bootstrap';

export default function EditJoin({ text, setJoin }) {
  const [formData, setFormData] = useState({text: text});

  function handleChange(evt) {
    setFormData({text: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const join = await update(formData);
    setJoin(join);
  }

  return (
    <div id='edit-join'>
      <Form onSubmit={handleSubmit} id='edit-join-form'>
        <Form.Control
          name='join'
          value={formData.text}
          onChange={handleChange}
          as='textarea'
        />
        <Button type='submit' variant='success'>Submit</Button>
      </Form>
    </div>
  )
}