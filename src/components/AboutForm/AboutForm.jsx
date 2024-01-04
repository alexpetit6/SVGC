import { Form, Button } from 'react-bootstrap';
import './AboutForm.css';
import { useState, useRef } from 'react';
import FileInputCard from '../FileInputCard/FileInputCard';
import { update } from '../../utilities/about-api';

export default function AboutForm({ about, setAbout }) {
  const [formData, setFormData] = useState({
    intro: about.intro,
    text: about.text
  });
  const [isLoading, setLoading] = useState(false);

  const imgRef = useRef(null);

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
    if (imgRef.current?.value) newFormData.append('img', imgRef.current.files[0]);
    const updatedAbout = await update(newFormData);
    setFormData({
      intro: updatedAbout.intro,
      text: updatedAbout.text
    });
    if (imgRef.current?.value) imgRef.current.value = null;
    setAbout(updatedAbout);
    setLoading(false);
  }

  return (
    <Form id='about-form' onSubmit={handleSubmit}>
      <Form.Group controlId='aboutForm.intro'>
        <Form.Control 
          onChange={handleChange} 
          value={formData.intro} 
          name='intro' 
          as='textarea' 
        />
      </Form.Group>
      <Form.Group>
        <Form.Control 
          onChange={handleChange}
          value={formData.text}
          name='text' 
          as="textarea" 
          rows={4} 
        />
      </Form.Group>
      <FileInputCard className='about-input-card' img={about.img} inputRef={imgRef}/>
      <Button type='submit' disabled={isLoading}>{isLoading ? 'Saving Changes...' : 'SUBMIT'}</Button>
    </Form>
  )
}