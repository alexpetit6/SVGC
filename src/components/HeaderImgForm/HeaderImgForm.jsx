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
    </Form>
  )
}