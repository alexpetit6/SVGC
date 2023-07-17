import { useState, useEffect } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import { getPhotos } from "../../utilities/photos-api";
import Container from "react-bootstrap/Container";

export default function() {
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
      <PhotoForm setPhotos={setPhotos} photos={photos} />
      <Container>
        {photos.map((p, i) => <PhotoCard i={i} photos={photos} url={p.url} title={p.title} key={p._id} />)}
      </Container>
    </>
  )
}