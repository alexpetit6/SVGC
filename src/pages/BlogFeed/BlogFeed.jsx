import './BlogFeed.css';
import { getPosts } from '../../utilities/posts-api';
import { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { ListGroup } from 'react-bootstrap';

export default function BlogFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(function() {
    async function getAllPosts() {
      const allPosts = await getPosts();
      setPosts(allPosts);
    }
    getAllPosts();
  }, [])

  const Posts = posts.map((p) => <PostCard key={p.id} post={p} />)

  return (
    <>
    <ListGroup>
      {Posts}
    </ListGroup>
    </>
  )
}