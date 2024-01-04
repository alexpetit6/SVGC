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
  const [errorMsg, setErrorMsg] = useState({
    title: '',
    headerPhoto: '',
    body: '',
    gallery: '',
  })

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
    const newFormData = new FormData();
    if (postId) {
      if (headerInputRef.current?.value) newFormData.append('header', headerInputRef.current.files[0]);
      if (galleryInputRef.current?.value) {
        if (galleryInputRef.current.files.length !== 3) {
          setErrorMsg({
            ...errorMsg,
            gallery: 'Must have exactly 3 files selected.'
          });
          return
        };
        setLoading(true);
        for (let i = 0; i < galleryInputRef.current.files.length; i++) {
          newFormData.append('gallery', galleryInputRef.current.files[i]);
        };
      } else {
        const editRefs = [editGalleryRef1, editGalleryRef2, editGalleryRef3];
        const galleryIndices = [];
        editRefs.forEach(function(ref, i) {
          if (ref.current?.value) {
            newFormData.append('gallery', ref.current.files[0]);
            galleryIndices.push(i);
          };
        });
        newFormData.append('galleryIndices', JSON.stringify(galleryIndices));
      }
      await update(postId, newFormData);
      setLoading(false);
      return
    };
    if (!headerInputRef.current?.value) {
      setErrorMsg({
        ...errorMsg,
        headerPhoto: '*Please select an image for the header image.'
      });
      return
    };
    if (galleryInputRef.current.value) {
      if (galleryInputRef.current.files.length !== 3) {
        setErrorMsg({
          ...errorMsg,
          gallery: '*Must have exactly 3 files selected.' 
        });
        return
      };
    };
    for (const [key] of Object.entries(formData)) {
      if (!formData[key]) {
        setErrorMsg({
          ...errorMsg,
          [key]: '*Can not leave empty.'
        });
        return
      };
    };
    setLoading(true);
    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    };
    newFormData.append('header', headerInputRef.current.files[0]);
    for (let i = 0; i < galleryInputRef.current.files.length; i++) {
      newFormData.append('gallery', galleryInputRef.current.files[i]);
    };
    await create(newFormData);
    headerInputRef.current.value = null;
    galleryInputRef.current.value = null;
    setErrorMsg({
      title: '',
      headerPhoto: '',
      body: '',
      gallery: '',
    });
    setFormData(baseData);
    setLoading(false);
  }

  return (
    <Form onSubmit={handleSubmit} id='blog-form'>
      <Form.Group className="mb-3" controlId="blogForm.title">
        <Form.Label>Title</Form.Label>
        <p className='error-msg'>{errorMsg.title}</p>
        <Form.Control 
          onChange={handleChange} 
          value={formData.title} 
          name='title' 
          type='text' 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="eventForm.photo">
        <Form.Label>Header Photo</Form.Label>
        <p className='error-msg'>{errorMsg.headerPhoto}</p>
        { post ?
        <FileInputCard className='header-input' inputRef={headerInputRef} img={post.headerPhoto}/>
        :
        <Form.Control type='file' ref={headerInputRef} accept='image/jpeg'/>
      }
      </Form.Group>
      <Form.Group className="mb-3" controlId="blogForm.body">
        <Form.Label>Body Text</Form.Label>
        <p className='error-msg'>{errorMsg.body}</p>
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
        <p className='error-msg'>{errorMsg.gallery}</p>
        { post ?
          post.gallery.length ?
            <div className='edit-gallery'>
              <FileInputCard inputRef={editGalleryRef1} img={post.gallery[0]}/>
              <FileInputCard inputRef={editGalleryRef2} img={post.gallery[1]}/>
              <FileInputCard inputRef={editGalleryRef3} img={post.gallery[2]}/>
            </div>
            :
            <Form.Control type='file' ref={galleryInputRef} multiple accept='image/jpeg'/>
          :
          <Form.Control type='file' ref={galleryInputRef} multiple accept='image/jpeg'/>
        }
      </Form.Group>
      <div className="d-grid gap-2">
        {
        postId 
        ? 
        <Button type='submit' disabled={isLoading}>{isLoading ? 'Saving Changes...' : 'SUBMIT'}</Button> 
        : 
        <Button type='submit' disabled={isLoading}>{isLoading ? 'Creating Post...' : 'SUBMIT'}</Button>
        }
      </div>
    </Form>
  )
}