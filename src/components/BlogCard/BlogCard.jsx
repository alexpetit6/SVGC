import './BlogCard.css';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ActionButton from '../ActionButton/ActionButton';

export default function BlogCard({ post, setPosts }) {
  return (
    <ListGroup.Item>
      <Card className='blog-card'>
        <Card.Body className='blog-card-title'>
          <Card.Text>
            {post.title}
            <Button className='edit-post-btn' variant='warning' size='sm'>
              <Link to={`/blog/new/${post.id}`}>EDIT</Link>
            </Button>
            <ActionButton className='delete-post-btn' action='deletePost' id={post.id} setterFunc={setPosts} />
          </Card.Text>
        </Card.Body>
        <Link to={`/blog/${post.id}`}> 
          <Card.Img variant="bottom" src="https://i.imgur.com/2peAyqN.jpg" />
        </Link> 
      </Card>
    </ListGroup.Item>
  )
}