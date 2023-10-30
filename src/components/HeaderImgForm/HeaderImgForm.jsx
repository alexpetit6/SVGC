import './HeaderImgForm.css';
import FileInputCard from '../FileInputCard/FileInputCard';
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { update } from '../../utilities/headerImgs-api';

export default function HeaderImgForm(img) {
  const [type, setType] = useState(null)

  fileInputRef = useRef(null);

  function handleRadio(imgType) {
    imgType === 'desktop' ? setType('desktop') : setType('mobile'); 
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (fileInputRef.current) {
      const newFormData = new FormData();
      newFormData.append('type', type);
      newFormData.append('photo', fileInputRef.current.files[0]);
      const headerImg = await update(newFormData);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FileInputCard  img={img} inputRef={fileInputRef} />
      <Form.Check
       inline
       label='Desktop image?'
       type='radio'
       id='inline-radio-1'
       onClick={() => handleRadio('desktop')}
       />
      <Form.Check
       inline
       label='Mobile image?'
       type='radio'
       id='inline-radio-2'
       onClick={() => handleRadio('mobile')}
      />
      <Button type='submit'>SUBMIT</Button>
    </Form>
  )
}