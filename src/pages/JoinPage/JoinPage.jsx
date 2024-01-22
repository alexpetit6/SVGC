import './JoinPage.css';
import { useState, useEffect } from 'react';
import { getJoin } from '../../utilities/join-api';
import { Button } from 'react-bootstrap';
import PageHeader from '../../components/PageHeader/PageHeader';
import EditJoin from '../../components/EditJoin/EditJoin';

export default function JoinPage({ user }) {
  const [headerImg, setHeaderImg] = useState(window.innerWidth <= 576 ? '/headers/membership-mobile.jpg' : '/headers/membership.jpg');
  const [join, setJoin] = useState(null);
  const [isEditing, setEditing] = useState(false);

  useEffect(function() {
    async function showJoin() {
      const join = await getJoin();
      setJoin(join);
    }
    showJoin();
  }, [])

  function handleEditing() {
    setEditing(!isEditing);
  }

  window.addEventListener('resize', () => window.innerWidth <= 576 ? setHeaderImg('/headers/membership-mobile.jpg') : setHeaderImg('/headers/membership.jpg') )

  // useEffect(function() {
  //   window.innerWidth <= 576 ? setHeaderImg('/headers/membership-mobile.jpg') : setHeaderImg('/headers/membership.jpg')
  // }, [])
  if (join) {
    return (
      <>
      <PageHeader img={headerImg} text='Join The Club!' user={user} page='membership' />
      { user ?
        isEditing ?
        <Button id='edit-join-btn' onClick={handleEditing} variant='warning'>CANCEL</Button>
        :
        <Button id='edit-join-btn' onClick={handleEditing} variant='warning'>EDIT</Button>
      :
        null
      }
      { isEditing ?
        <EditJoin text={join.text} setJoin={setJoin} />
      :
        <p id='join-page-intro'>{join.text}</p>
      }
      <div id='join-page-card'>
        <div id='join-page-card-content'>
          <h1>Becoming a member is easy!</h1>
          <h3>Just click the button below and watch your garden grow!</h3>
          <a id='cheddar-link' href="https://my.cheddarup.com/c/snoqualmie-valley-garden-club-membership" rel="noopener noreferrer" target="_blank"><img alt="Pay with Cheddar Up" src="https://my.cheddarcdn.com/assets/CheddarUpPay-9b60c97e.svg"/></a>
        </div>
      </div>
      </>
    )
  }
}