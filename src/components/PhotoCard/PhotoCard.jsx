import ActionButton from '../ActionButton/ActionButton';
import './PhotoCard.css'

export default function PhotoCard({ url, caption, archived, id, setPhotos, user }) {
  return (
    <>
    <div className='img-div'>
      <img className='gallery-img' data-fancybox data-caption={caption} src={url} />
      {
        archived
        ?
        user ? <ActionButton className='delete-img' action='deleteImg' id={id} setterFunc={setPhotos} /> : null
        :
        user ? <ActionButton className='delete-img' action='archiveImg' id={id} setterFunc={setPhotos} /> : null
      }
    </div>
    </>
  )
}