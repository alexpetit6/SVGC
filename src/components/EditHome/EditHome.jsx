import './EditHome.css'
import { useState, useRef } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import FileInputCard from '../FileInputCard/FileInputCard';

export default function EditHome({ home }) {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    brand: home.brand,
    imgText1: home.imgText1,
    imgText2: home.imgText2,
  });

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id='home-img'>
        <img src="https://i.imgur.com/ltGf2TP.jpg" alt="" />
        <input name='brand' id='brand-statement' className='text-center' value={formData.brand} onChange={handleChange}/>
        <Button type='submit' variant='success' disabled={isLoading}>{isLoading ? 'Saving Changes...' : 'Submit Changes'}</Button>
      </div>
      <Row id='home-row1'>
        <Col lg className='text-col'>
          <div className='img-text'>
            <textarea name='imgText1' value={formData.imgText1} onChange={handleChange} />
          </div>
        </Col>
        <Col className='home-pix' lg>
          <FileInputCard img={home.img1} inputRef={img1Ref} />
          <img className='home-body-img' id='home-pic-1' src="https://i.imgur.com/e09OXu0.jpg" alt="" />
        </Col>
      </Row>
      <Row id='home-row2'>
        <Col className='home-pix' lg>
          <FileInputCard img={home.img2} inputRef={img2Ref} />
          <img className='home-body-img' id='home-pic-1' src="https://i.imgur.com/e09OXu0.jpg" alt="" />
        </Col>
        <Col lg className='text-col'>
          <div className='img-text'>
            <textarea name='imgText2' value={formData.imgText2} onChange={handleChange} />
          </div>
        </Col>
      </Row>
    </form>
  );
}