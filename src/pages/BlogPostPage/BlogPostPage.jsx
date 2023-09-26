import './BlogPostPage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postDetail } from '../../utilities/posts-api';
import Fancybox from '../../components/FancyBox/FancyBox';

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Facilisis sed odio morbi quis commodo odio.\n\n Tellus id interdum velit laoreet id donec.\n\n Sed odio morbi quis commodo odio aenean sed adipiscing diam.\n\n Semper eget duis at tellus at urna.\n\n Nunc pulvinar sapien et ligula.\n\n'

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
      <div className='blog-header'>
        <img className='blog-header-img' src={post.headerPhoto} />
      </div>
      <h1 className='blog-title'>{post.title}</h1>
      <p className='blog-body'>{post.body}</p>
      <Fancybox newClass='blog-gallery'>
        <a data-fancybox href={post.gallery[0]}>
          <img src={post.gallery[0]} />
        </a>
        <a data-fancybox href={post.gallery[1]}>
          <img src={post.gallery[1]} />
        </a>
        <a data-fancybox href={post.gallery[2]}>
          <img src={post.gallery[2]} />
        </a>
      </Fancybox>
      </>
    )
  }
}