import './BlogFeed.css';
import { getPosts } from '../../utilities/posts-api';
import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import BlogCard from '../../components/BlogCard/BlogCard';

export default function BlogFeed() {
  const [posts, setPosts] = useState([]);
  const [headerImg, setHeaderImg] = useState(window.innerWidth <= 576 ? '/headers/blog-mobile.jpg' : '/headers/blog.jpg');

  window.addEventListener('resize', () => window.innerWidth <= 576 ? setHeaderImg('/headers/blog-mobile.jpg') : setHeaderImg('/headers/blog.jpg') )

  useEffect(function() {
    async function getAllPosts() {
      const allPosts = await getPosts();
      setPosts(allPosts);
    }
    getAllPosts();
  }, [])

  const Posts = posts.map((p) => <BlogCard key={p.id} post={p} />)

  return (
    <>
    <div className="header-img">
      <img src={headerImg}/>
      <h1 className='header-text'>Blog</h1>
    </div>
    <ListGroup>
      {Posts}
    </ListGroup>
    </>
  )
}