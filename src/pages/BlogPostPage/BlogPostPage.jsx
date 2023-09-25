import './BlogPostPage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postDetail } from '../../utilities/posts-api';
import { Fancybox } from '@fancyapps/ui';

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
      <img className='blog-header-img' src={post.headerPhoto} />
      <h1 className='blog-title'>{post.title}</h1>
      <p className='blog-body'>{post.body}</p>
      <Fancybox newClass='blog-gallery'>
        <img data-fancybox src={post.gallery[0]} />
        <img data-fancybox src={post.gallery[1]} />
        <img data-fancybox src={post.gallery[2]} /> 
      </Fancybox>
      <h1 style={{color: 'black'}}>{postId}</h1>
      </>
    )
  }
}