import './About.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getAbout } from '../../utilities/about-api';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function About({ user }) {
  const [about, setAbout] = useState();
  const [editing, setEditing] = useState(false);

  useEffect(function() {
    async function getDetails() {
      const about = await getAbout();
      setAbout(about);
    }
    getDetails();
  }, []);

  function handleEditing() {
    setEditing(!editing);
  }



  if (about) {
    return (
      editing
      ?
      <>
      <PageHeader text='About' user={user} page='about' />
      { user ? <Button id='edit-about-btn' onClick={handleEditing} variant='warning' size='lg'>Stop Editing</Button> : null }
      {/* <CommunityForm community={community} setCommunity={setCommunity}/> */}
      </>
      :
      <>
      <PageHeader text='About' user={user} page='about' />
      { user ? <Button id='edit-about-btn' onClick={handleEditing} variant='warning' size='lg'>EDIT</Button> : null }
      <div id='about-body'>
        <p id='about-intro'>
          {about.intro}
        </p>
        <p id='about-text'>
          {about.text}
        </p>
        <img src={about.img} alt="" />
      </div>
      </>
    )
  }
}