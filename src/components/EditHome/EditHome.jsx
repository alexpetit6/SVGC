import './EditHome.css'
import { useState, useRef } from 'react';
import { update } from '../../utilities/home-api';
import { Row, Col, Card, Button } from 'react-bootstrap'
import FileInputCard from '../FileInputCard/FileInputCard';

export default function EditHome({ handleEditing, home, setHome }) {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    brand: home.brand,
    imgText1: home.imgText1,
    imgText2: home.imgText2,
  });

  const headerImgRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  function handleStop() {
    handleEditing();
  }

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
    if (headerImgRef.current.value) newFormData.append('headerImg', headerImgRef.current.files[0]);
    if (img1Ref.current.value) newFormData.append('img1', img1Ref.current.files[0]);
    if (img2Ref.current.value) newFormData.append('img2', img2Ref.current.files[0]);
    const updatedHome = await update(newFormData);
    setFormData({
      intro: updatedHome.brand,
      body1: updatedHome.imgText1,
      body2: updatedHome.imgText2,
    });
    img1Ref.current.value = null;
    img2Ref.current.value = null;
    setHome(updatedHome);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id='home-img' style={{backgroundImage: `url(${home.headerImg})`}}>
        <input name='brand' id='brand-statement-input' className='text-center' value={formData.brand} onChange={handleChange}/>
        <Button id='submit-edit-home' type='submit' variant='success' disabled={isLoading}>{isLoading ? 'Saving Changes...' : 'Submit Changes'}</Button>
        <Button id='stop-edit-home' variant='warning' onClick={handleStop}>Stop Editing</Button>
      </div>
      <Row id='home-row1'>
        <Col lg className='text-col'>
          <div className='img-text'>
            {/* Removing html set height */}
            <textarea style={{height: ''}} name='imgText1' value={formData.imgText1} onChange={handleChange} />
          </div>
        </Col>
        <Col className='home-pix' lg>
          <FileInputCard className='edit-home-body-img' img={home.img1} inputRef={img1Ref} />
        </Col>
      </Row>
      <Row id='home-row2'>
        <Col className='home-pix' lg>
          <FileInputCard className='edit-home-body-img' img={home.img2} inputRef={img2Ref} />
        </Col>
        <Col lg className='text-col'>
          <div className='img-text'>
            <textarea style={{height: ''}} name='imgText2' value={formData.imgText2} onChange={handleChange} />
          </div>
        </Col>
      </Row>
    </form>
  );
}