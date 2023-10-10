import './BlogCard.css';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <ListGroup.Item>
    <Link to={`/blog/${post.id}`}> 
      <Card className='blog-card'>
        <Card.Body className='blog-card-title'>
          <Card.Text>
            {post.title}
            <Button className='edit-post-btn' variant='warning' size='sm'><Link to={`/blog/new/${post.id}`}>EDIT</Link></Button>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://i.imgur.com/2peAyqN.jpg" />
      </Card>
    </Link> 
    </ListGroup.Item>
  )
}