import './PhotoCard.css'
import Card from 'react-bootstrap/Card'
import Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ActionButton from '../ActionButton/ActionButton'

export default function PhotoCard({ photos, setPhotos, i, url, title, id, user }) {
  
  if (!i || !(i % 2)) {
    const next = photos[i + 1]
    return (
      <Row>
        <Col className='photo-col' md>
          <Card className='photo-card'>
            {/* <Card.Body>
              <Card.Text className='text-center'>{title}</Card.Text>
            </Card.Body> */}
            <Card.Img className='card-img' src={url} />
            {
              user
              ?
              <Card.ImgOverlay>
                <ActionButton action='deleteImg' id={id} setterFunc={setPhotos}></ActionButton>
              </Card.ImgOverlay>
              :
              null
            }
          </Card>
        </Col>
        {
        next
        ?
        <Col className='photo-col' md>
          <Card className='photo-card'>
            {/* <Card.Body>
              <Card.Text className='text-center'>{next.title}</Card.Text>
            </Card.Body> */}
            <Card.Img className='card-img' src={next.url} />
            {
              user
              ?
              <Card.ImgOverlay>
                <ActionButton action='deleteImg' id={id} setterFunc={setPhotos}></ActionButton>
              </Card.ImgOverlay>
              :
              null
            }
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