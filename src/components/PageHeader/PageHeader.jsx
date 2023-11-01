import './PageHeader.css';
import HeaderImgForm from '../HeaderImgForm/HeaderImgForm';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getImgs } from '../../utilities/headerImgs-api';

export default function PageHeader({ text, user, page }) {
  const [headerImg, setHeaderImg] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(function() {
    async function getAllImgs() {
      const allImgs = await getImgs();
      window.innerWidth <= 576 ? setHeaderImg(allImgs[page][1]) : setHeaderImg(allImgs[page][0]);
    }
    getAllImgs();
  }, [])

  function handleEditing() {
    setEditing(!editing);
  }

  return (
    editing
    ?
    <>
      <HeaderImgForm img={headerImg} page={page} />
      { user ? <Button onClick={handleEditing} variant='warning' size='lg'>Stop Editing</Button> : null }
    </>
    :
    <div className="header-img">
      <img src={headerImg}/>
      <h1 className='header-text'>{text}</h1>
      { user ? <Button id='header-edit-btn' onClick={handleEditing} variant='warning' size='lg'>EDIT</Button> : null }
    </div>
  )
}