import './Home.css'
import { Row, Col, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <>
    <div id='home-img'>
      <img src="https://i.imgur.com/ltGf2TP.jpg" alt="" />
      <h1 id='brand-statement' className='text-center'>Brand Statement</h1>
    </div>
    <Row id='home-row1'>
      <Col xl className='text-col'>
        <div className='img-text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi, nihil rem tempora est sequi doloremque debitis aliquam pariatur consequuntur aliquid aspernatur illo adipisci voluptates animi velit doloribus, reprehenderit odio!</p>
        </div>
      </Col>
      <Col className='home-pix' xl>
        <img className='img-fluid' id='home-pic-1' src="https://i.imgur.com/e09OXu0.jpg" alt="" />
      </Col>
    </Row>
    <Row id='home-row2'>
      <Col className='home-pix' xl>
        <img className='img-fluid' id='home-pic-1' src="https://i.imgur.com/e09OXu0.jpg" alt="" />
      </Col>
      <Col xl className='text-col'>
        <div className='img-text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi, nihil rem tempora est sequi doloremque debitis aliquam pariatur consequuntur aliquid aspernatur illo adipisci voluptates animi velit doloribus, reprehenderit odio!</p>
        </div>
      </Col>
    </Row>
    </>
  )
}