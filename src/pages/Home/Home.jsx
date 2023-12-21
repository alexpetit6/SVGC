import './Home.css'
import { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { getHome } from '../../utilities/home-api';
import EditHome from '../../components/EditHome/EditHome';

export default function Home({ user }) {
  const [isEditing, setEditing] = useState(false);
  const [home, setHome] = useState(null);

  useEffect(() => {
    async function Home() {
      const home = await getHome();
      setHome(home);
    }
    Home();
  }, []);

  function handleEditing() {
    setEditing(!isEditing);
  }

  if (home) {
    return (
      isEditing ?
      <EditHome handleEditing={handleEditing} home={home} setHome={setHome} />
      :
      <>
      <div id='home-img' style={{backgroundImage: `url(${home.headerImg})`}}>
        <h1 id='brand-statement' className='text-center'>{home.brand}</h1>
        { user ? <Button id='open-edit-home' variant='warning' onClick={handleEditing}>EDIT</Button> : null }
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