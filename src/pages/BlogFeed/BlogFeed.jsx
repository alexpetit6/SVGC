import './BlogFeed.css';
import { getPosts } from '../../utilities/posts-api';
import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import BlogCard from '../../components/BlogCard/BlogCard';
import PageHeader from '../../components/PageHeader/PageHeader';

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

  const Posts = posts.map((p) => <BlogCard key={p.id} post={p} setPosts={setPosts} />)

  return (
    <>
    <PageHeader img={headerImg} text='Blog' />
    <ListGroup>
      {Posts}
    </ListGroup>
    </>
  )
}