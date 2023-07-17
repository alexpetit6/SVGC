import Card from 'react-bootstrap/Card'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ActionButton from '../ActionButton/ActionButton'

export default function PhotoCard({ photos, i, url, title, id }) {
  
  if (!i || !(i % 2)) {
    const next = photos[i + 1]
    return (
      <Row>
        <Col md>
          <Card>
            <Card.Body>
              <Card.Text className='text-center'>{title}</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={url} />
            <Card.ImgOverlay>
              <ActionButton action='deleteImg' id={id}></ActionButton>
            </Card.ImgOverlay>
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
            <Card.ImgOverlay>
              <ActionButton action='deleteImg' id={id}></ActionButton>
            </Card.ImgOverlay>
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