import { useState, useEffect } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import { getPhotos } from "../../utilities/photos-api";
import Container from "react-bootstrap/Container";

export default function PhotoGallery({ user }) {
  const [photos, setPhotos] = useState([]);

  useEffect(function() {
    async function getIndex() {
      const index = await getPhotos();
      setPhotos(index)
    }
    getIndex();
  }, [])
  return (
    <>
      { user ?  <PhotoForm setPhotos={setPhotos} photos={photos} /> : null }
      <Container>
        {photos.map((p, i) => <PhotoCard 
          i={i} 
          setPhotos={setPhotos}
          photos={photos} 
          url={p.url} 
          title={p.title} 
          key={p._id} 
          id={p._id}
          user={user} 
        />)}
      </Container>
    </>
  )
}