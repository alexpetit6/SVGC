import './BlogPostPage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postDetail } from '../../utilities/posts-api';
import Fancybox from '../../components/FancyBox/FancyBox';

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
      <div className='blog-header'>
        <img className='blog-header-img' src={post.headerPhoto} />
      </div>
      <h1 className='blog-title'>{post.title}</h1>
      <div className='blog-body'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam quam nulla porttitor massa. Phasellus vestibulum lorem sed risus ultricies tristique. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Metus dictum at tempor commodo ullamcorper. Sit amet consectetur adipiscing elit pellentesque habitant. Aliquam sem fringilla ut morbi.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam quam nulla porttitor massa. Phasellus vestibulum lorem sed risus ultricies tristique. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Metus dictum at tempor commodo ullamcorper. Sit amet consectetur adipiscing elit pellentesque habitant. Aliquam sem fringilla ut morbi.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam quam nulla porttitor massa. Phasellus vestibulum lorem sed risus ultricies tristique. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Metus dictum at tempor commodo ullamcorper. Sit amet consectetur adipiscing elit pellentesque habitant. Aliquam sem fringilla ut morbi.</p>
      </div>
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