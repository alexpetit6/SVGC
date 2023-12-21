import './Home.css'
import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { getHome } from '../../utilities/home-api';

export default function Home() {
  const [home, setHome] = useState(null);

  useEffect(() => {
    async function Home() {
      const home = await getHome();
      setHome(home);
    }
    Home();
  }, []);

  if (home) {
    return (
      <>
      <div id='home-img'>
        <img src={home.headerImg} alt="" />
        <h1 id='brand-statement' className='text-center'>{home.brand}</h1>
      </div>
      <Row id='home-row1'>
        <Col lg className='text-col'>
          <div className='img-text'>
            <p>{home.imgText1}</p>
          </div>
        </Col>
        <Col className='home-pix' lg>
          <img className='home-body-img' id='home-pic-1' src={home.img1} alt="" />
        </Col>
      </Row>
      <Row id='home-row2'>
        <Col className='home-pix' lg>
          <img className='home-body-img' id='home-pic-1' src={home.img2} alt="" />
        </Col>
        <Col lg className='text-col'>
          <div className='img-text'>
            <p>{home.imgText2}</p>
          </div>
        </Col>
      </Row>
      </>
    );
  };
}