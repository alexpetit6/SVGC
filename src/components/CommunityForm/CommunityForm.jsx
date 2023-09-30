import { Form } from 'react-bootstrap';
import './CommunityForm.css';
import { useState, useRef } from 'react';
import FileInputCard from '../FileInputCard/FileInputCard';

export default function CommunityForm({ community }) {
  const [formData, setFormData] = useState(community);

  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  return (
    <Form id='community-form'>
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
      <FileInputCard className='community-input-card' img={formData.img1} inputRef={firstImgRef}/>
      <FileInputCard className='community-input-card' img={formData.img2} inputRef={secondImgRef}/>
      <Form.Control 
        onChange={handleChange}
        value={formData.body2}
        name='body2' 
        as="textarea" 
        rows={4} 
      />
      <Form.Control 
        onChange={handleChange} 
        value={formData.outro} 
        name='outro' 
        as='textarea' 
      />
    </Form>
  )
}