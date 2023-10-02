import { Form, Button } from 'react-bootstrap';
import './CommunityForm.css';
import { useState, useRef } from 'react';
import FileInputCard from '../FileInputCard/FileInputCard';
import { update } from '../../utilities/community-api';

export default function CommunityForm({ community, setCommunity }) {
  const [formData, setFormData] = useState({
    intro: community.intro,
    body1: community.body1,
    body2: community.body2,
    outro: community.outro,
  });

  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newFormData = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    };
    if (firstImgRef.current) newFormData.append('img1', firstImgRef.current.files[0]);
    if (secondImgRef.current) newFormData.append('img2', secondImgRef.current.files[0]);
    const updatedCommunity = await update(newFormData);
    setFormData({
      intro: updatedCommunity.intro,
      body1: updatedCommunity.body1,
      body2: updatedCommunity.body2,
      outro: updatedCommunity.outro,
    });
    setCommunity(updatedCommunity);
  }

  return (
    <Form id='community-form' onSubmit={handleSubmit}>
      <Form.Group controlId='communityForm.intro'>
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
          value={formData.body1}
          name='body1' 
          as="textarea" 
          rows={4} 
        />
      </Form.Group>
      <FileInputCard className='community-input-card' img={community.img1} inputRef={firstImgRef}/>
      <FileInputCard className='community-input-card' img={community.img2} inputRef={secondImgRef}/>
      <Form.Group>
        <Form.Control 
          onChange={handleChange}
          value={formData.body2}
          name='body2' 
          as="textarea" 
          rows={4} 
        />
      </Form.Group>
      <Form.Group>
        <Form.Control 
          onChange={handleChange} 
          value={formData.outro} 
          name='outro' 
          as='textarea' 
        />
      </Form.Group>
      <Button type='submit'>SUBMIT</Button>
    </Form>
  )
}