import ActionButton from '../ActionButton/ActionButton';
import './PhotoCard.css'

export default function PhotoCard({ url, caption, id, setPhotos, user }) {
  return (
    <>
    <img className='gallery-img' data-fancybox data-caption={caption} src={url} />
    <ActionButton className='delete-img' action='deleteImg' id={id} setterFunc={setPhotos} />
    </>
  )
}