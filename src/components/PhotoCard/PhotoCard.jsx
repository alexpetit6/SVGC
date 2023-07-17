import Card from 'react-bootstrap/Card'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function PhotoCard({ photos, i, url, title }) {
  
  if (!i || i % 2) {
    const next = photos[i + 1]
    return (
      <Row>
        <Col md>
          <Card>
            <Card.Body>
              <Card.Text className='text-center'>{title}</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={url} />
          </Card>
        </Col>
        {
        next
        ?
        <Col md>
          <Card>
            <Card.Body>
              <Card.Text className='text-center'>{next.title}</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={next.url} />
          </Card>
        </Col>
        :
        <Col md></Col>
        }
      </Row>
    );
  };
  return
}