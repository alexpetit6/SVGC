import { Form } from 'react-bootstrap';
import './CommunityForm.css';
import { useState, useRef } from 'react';

export default function CommunityForm() {
  const [formData, setFormData] = useState([]);

  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  return (
    <Form>
      <Form.Control 
        onChange={handleChange} 
        value={formData.intro} 
        name='intro' 
        as='textarea' 
      />
      <Form.Control 
          onChange={handleChange}
          value={formData.body1}
          name='body1' 
          as="textarea" 
          rows={4} 
        />
      <Form.Control type='file' ref={firstImgRef} />
      <Form.Control 
          onChange={handleChange}
          value={formData.body2}
          name='body2' 
          as="textarea" 
          rows={4} 
        />
      <Form.Control type='file' ref={secondImgRef} />
      <Form.Control 
        onChange={handleChange} 
        value={formData.outro} 
        name='outro' 
        as='textarea' 
      />
    </Form>
  )
}