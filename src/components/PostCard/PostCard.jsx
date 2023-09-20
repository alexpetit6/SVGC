import { Link } from 'react-router-dom';
import './PostCard.css';

export default function PostCard({post}) {
  return (
    <Link to={`/blog/${post.id}`}>
      <h1>{post.title}</h1>
    </Link>
  )
}