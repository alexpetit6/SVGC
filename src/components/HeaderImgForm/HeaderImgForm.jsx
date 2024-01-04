import './HeaderImgForm.css';
import FileInputCard from '../FileInputCard/FileInputCard';
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { update } from '../../utilities/headerImgs-api';

export default function HeaderImgForm({img, page, setHeaderImg}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  function handleCheck() {
    setIsMobile(!isMobile);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const type = isMobile ? 'mobile' : 'desktop'
    if (fileInputRef.current?.value) {
      const newFormData = new FormData();
      newFormData.append('type', type);
      newFormData.append('page', page);
      newFormData.append('photo', fileInputRef.current.files[0]);
      const headerImg = await update(newFormData);
      window.innerWidth <= 576 ? setHeaderImg(headerImg[page][1]) : setHeaderImg(headerImg[page][0])
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FileInputCard className='header-input-card' img={img} inputRef={fileInputRef} />
        <Form.Check
          inline
          label='Mobile image?'
          type='checkbox'
          id='mobile-checkbox'
          onClick={() => handleCheck()}
        />
      <Button type='submit' disabled={isLoading}>{isLoading ? 'Saving Changes...' : 'SUBMIT'}</Button>
      <h5>The navbar will obscure 25% of the image on both desktop and mobile.</h5>
      <h5>Desktop image should have an aspect ratio of 5:1 and should not be less than 1440 pixels in width, eg: 2560 x 512.</h5>
      <h5>Mobile image should have an aspect ratio of 4:5 and should not be less than 1080 pixels in width, eg: 1080 x 1296.</h5>
    </Form>
  )
}