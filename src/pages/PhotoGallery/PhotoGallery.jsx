import './PhotoGallery.css'
import { useState, useEffect } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import { getPhotos } from "../../utilities/photos-api";
import Fancybox from "../../components/FancyBox/FancyBox";

export default function PhotoGallery({ user, archive }) {
  const [photos, setPhotos] = useState([]);
  const [archivePhotos, setArchivePhotos] = useState([]);

  useEffect(function() {
    async function getIndex() {
      const index = await getPhotos();
      let filteredIndex = null
      archive ? filteredIndex = index.filter((p) => p.archived) : filteredIndex = index.filter((p) => !p.archived)
      setPhotos(filteredIndex)
    }
    getIndex();
  }, [])



  return (
    archive
    ?
    <>
    <div className="header-img" >
      <img src="https://i.imgur.com/BOv2ex5.jpg" alt="" />
      <h1 className='header-text'>Photo Archive</h1>
    </div>
    <Fancybox>
      {photos.map((p, i) => <PhotoCard 
        setPhotos={setPhotos}
        url={p.url} 
        caption={p.caption} 
        key={p._id} 
        id={p._id}
        user={user} 
      />)}
    </Fancybox>
    </>
    :
    <>
    <div className="header-img" >
      <img src="https://i.imgur.com/BOv2ex5.jpg" alt="" />
      <h1 className='header-text'>Photos</h1>
    </div>
    { user ?  <PhotoForm setPhotos={setPhotos} photos={photos} /> : null }
    <Fancybox>
      {photos.map((p, i) => <PhotoCard 
        setPhotos={setPhotos}
        url={p.url} 
        caption={p.caption} 
        key={p._id} 
        id={p._id}
        user={user} 
      />)}
    </Fancybox>
    </>
  )
}