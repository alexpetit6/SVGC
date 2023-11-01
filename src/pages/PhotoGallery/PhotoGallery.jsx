import './PhotoGallery.css'
import { useState, useEffect } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import PageHeader from '../../components/PageHeader/PageHeader';
import { getPhotos } from "../../utilities/photos-api";
import Fancybox from "../../components/FancyBox/FancyBox";
import { Button } from 'react-bootstrap';

export default function PhotoGallery({ user, archive }) {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [headerImg, setHeaderImg] = useState(window.innerWidth <= 576 ? '/headers/photo-gallery-mobile.jpg' : '/headers/photo-gallery.jpg');

  window.addEventListener('resize', () => window.innerWidth <= 576 ? setHeaderImg('/headers/photo-gallery-mobile.jpg') : setHeaderImg('/headers/photo-gallery.jpg') )

  useEffect(function() {
    async function getIndex() {
      const index = await getPhotos();
      let filteredIndex = null
      archive ? filteredIndex = index.filter((p) => p.archived) : filteredIndex = index.filter((p) => !p.archived)
      setFilteredPhotos(filteredIndex)
    }
    getIndex();
  }, [photos])

  return (
    archive
    ?
    <>
    <PageHeader img={headerImg} text='Photo Archive' user={user} page='gallery' />
    <Fancybox newClass='photo-gallery'>
      {filteredPhotos.map((p, i) => <PhotoCard 
        setPhotos={setPhotos}
        url={p.url} 
        caption={p.caption}
        archived={true} 
        key={p._id} 
        id={p._id}
        user={user} 
        />)}
    </Fancybox>
    </>
    :
    <>
    <PageHeader img={headerImg} text='Photos' user={user} page='gallery' />
    { user ?  <PhotoForm setPhotos={setPhotos} photos={photos} /> : null }
    {/* <Link id='archive-link' to='/photos/archive'>View Photo Archive</Link> */}
    <div id='archive-link'>
      <Button href='/photos/archive'>View Photo Archive</Button>
    </div>
    <Fancybox newClass='photo-gallery'>
      {filteredPhotos.map((p, i) => <PhotoCard 
        setPhotos={setPhotos}
        url={p.url}
        archived={false}
        caption={p.caption} 
        key={p._id} 
        id={p._id}
        user={user} 
      />)}
    </Fancybox>
    </>
  )
}