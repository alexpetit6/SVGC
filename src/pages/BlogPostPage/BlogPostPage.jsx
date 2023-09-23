import './BlogPostPage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postDetail } from '../../utilities/posts-api';

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(function() {
    async function getPost() {
      const detail = await postDetail(postId);
      console.log('this is the id', postId)
      setPost(detail);
      console.log(post)
    }
    getPost();
  }, []);
  
  if (post) {
    return (
      <>
      <img src={post.headerPhoto} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <img src={post.gallery[0]} />
      <img src={post.gallery[1]} />
      <img src={post.gallery[2]} /> 
      <h1 style={{color: 'black'}}>{postId}</h1>
      </>
    )
  }
}