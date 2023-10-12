import './CommunityPage.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CommunityForm from '../../components/CommunityForm/CommunityForm';
import { getCommunity } from '../../utilities/community-api';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function CommunityPage({ user }) {
  const [community, setCommunity] = useState();
  const [editing, setEditing] = useState(false);

  useEffect(function() {
    async function getDetails() {
      const community = await getCommunity();
      setCommunity(community);
    }
    getDetails();
  }, []);

  function handleEditing() {
    setEditing(!editing);
  }

  if (community) {
    return (
      editing
      ?
      <>
      <PageHeader img='https://i.imgur.com/zcyoc9z.jpg' text='Community Service'/>
      { user ? <Button id='edit-community-btn' onClick={handleEditing} variant='warning' size='lg'>Stop Editing</Button> : null }
      <CommunityForm community={community} setCommunity={setCommunity}/>
      </>
      :
      <>
      <PageHeader img='https://i.imgur.com/zcyoc9z.jpg' text='Community Service'/>
      { user ? <Button id='edit-community-btn' onClick={handleEditing} variant='warning' size='lg'>EDIT</Button> : null }
      <div id='community-body'>
        <p>
          {community.intro}
        </p>
        <p>
          {community.body1}
        </p>
        <img src={community.img1} alt="" />
        <img src={community.img2} alt="" />
        <p>
          {community.body2}
        </p>
        <p>
          {community.outro}
        </p>
      </div>
      </>
    )
  }
}