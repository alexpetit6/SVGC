import './Home.css'
import { Row, Col, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <>
    <div id='home-img'>
      <h1 id='brand-statement' className='text-center'>Brand Statement</h1>
    </div>
    <Row>
      <Col>
        <div className='square-content'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi, nihil rem tempora est sequi doloremque debitis aliquam pariatur consequuntur aliquid aspernatur illo adipisci voluptates animi velit doloribus, reprehenderit odio!</p>
        </div>
      </Col>
      <Col>

      </Col>
    </Row>
    </>
  )
}