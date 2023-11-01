import './HeaderImgForm.css';
import FileInputCard from '../FileInputCard/FileInputCard';
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { update } from '../../utilities/headerImgs-api';

export default function HeaderImgForm({img, page}) {
  const [isMobile, setIsMobile] = useState(false)

  const fileInputRef = useRef(null);

  function handleCheck() {
    setIsMobile(!isMobile);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const type = isMobile ? 'mobile' : 'desktop'
    if (fileInputRef.current) {
      const newFormData = new FormData();
      newFormData.append('type', type);
      newFormData.append('page', page);
      newFormData.append('photo', fileInputRef.current.files[0]);
      const headerImg = await update(newFormData);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FileInputCard  img={img} inputRef={fileInputRef} />
        <Form.Check
        inline
        label='Mobile image?'
        type='checkbox'
        id='inline-checkbox-1'
        onClick={() => handleCheck()}
        />
        {/* <Form.Check
        inline
        label='Mobile image?'
        type='radio'
        id='inline-radio-2'
        onClick={() => handleRadio('mobile')}
        /> */}
      <Button type='submit'>SUBMIT</Button>
    </Form>
  )
}