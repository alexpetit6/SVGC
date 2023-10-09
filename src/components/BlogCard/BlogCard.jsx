import './BlogCard.css';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <ListGroup.Item>
    <Link to={`/blog/${post.id}`}> 
      <Card className='blog-card'>
        <Card.Body className='blog-card-title'>
          <Card.Text>{post.title}</Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://i.imgur.com/2peAyqN.jpg" />
      </Card>
    </Link> 
    </ListGroup.Item>
  )
}