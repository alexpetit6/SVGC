import './BlogPostForm.css';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { create, update } from '../../utilities/posts-api';
import { postDetail } from '../../utilities/posts-api';
import FileInputCard from '../../components/FileInputCard/FileInputCard';

export default function BlogPostForm() {
  const baseData = {
    title: '',
    body: '',
  };

  const [post, setPost] = useState(null)
  const [formData, setFormData] = useState(baseData);
  const [isLoading, setLoading] = useState(false);

  const { postId } = useParams();

  const headerInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const editGalleryRef1 = useRef(null);
  const editGalleryRef2 = useRef(null);
  const editGalleryRef3 = useRef(null);

  useEffect(function () {
    if (postId) {
      async function getPost() {
        const post = await postDetail(postId);
        setFormData({
          title: post.title,
          body: post.body,
          location: post.location,
          photo: post.photo,
          date: post.formDate,
          time: post.time,
        });
        setPost(post);
      }
      getPost();
    }
  }, [])

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);
    const newFormData = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    };
    if (postId) {
      if (headerInputRef.current) newFormData.append('header', headerInputRef.current.files[0]);
      const editRefs = [editGalleryRef1, editGalleryRef2, editGalleryRef3];
      const galleryIndices = [];
      editRefs.forEach(function(ref, i) {
        if (ref.current?.value) {
          newFormData.append('gallery', ref.current.files[0]);
          galleryIndices.push(i);
        };
      });
      newFormData.append('galleryIndices', JSON.stringify(galleryIndices));
      await update(postId, newFormData);
    } else {
      newFormData.append('header', headerInputRef.current.files[0]);
      newFormData.append('gallery', galleryInputRef.current.files[0]);
      newFormData.append('gallery', galleryInputRef.current.files[1]);
      newFormData.append('gallery', galleryInputRef.current.files[2]);
      await create(newFormData);
      setFormData(baseData);
    }
    setLoading(false);
  }

  return (
    <Form onSubmit={handleSubmit} id='blog-form'>
      <Form.Group className="mb-3" controlId="blogForm.title">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          value={formData.title} 
          name='title' 
          type='text' 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.photo">
        <FileInputCard inputRef={headerInputRef} img={post ? post.headerPhoto : null}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="blogForm.body">
        <Form.Label>Body Text</Form.Label>
        <Form.Control 
          onChange={handleChange} 
          value={formData.body} 
          name='body' 
          as='textarea'
          rows={6}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.gallery">
        <Form.Label>Photo Gallery</Form.Label>
        {
        post
        ?
        <div className='edit-gallery'>
          <FileInputCard inputRef={editGalleryRef1} img={post.gallery[0]}/>
          <FileInputCard inputRef={editGalleryRef2} img={post.gallery[1]}/>
          <FileInputCard inputRef={editGalleryRef3} img={post.gallery[2]}/>
        </div>
        :
        <Form.Control type='file' ref={galleryInputRef} multiple/>
        }
      </Form.Group>
      <div className="d-grid gap-2">
        {
        postId 
        ? 
        <Button type='submit' disabled={isLoading}>{isLoading ? 'Saving Changes...' : 'SUBMIT'}</Button> 
        : 
        <Button type='submit' disabled={isLoading}>{isLoading ? 'Creating Event...' : 'SUBMIT'}</Button>
        }
      </div>
    </Form>
  )
}