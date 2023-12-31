import './JoinPage.css';
import { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function JoinPage({ user }) {
  const [headerImg, setHeaderImg] = useState(window.innerWidth <= 576 ? '/headers/membership-mobile.jpg' : '/headers/membership.jpg');

  window.addEventListener('resize', () => window.innerWidth <= 576 ? setHeaderImg('/headers/membership-mobile.jpg') : setHeaderImg('/headers/membership.jpg') )

  // useEffect(function() {
  //   window.innerWidth <= 576 ? setHeaderImg('/headers/membership-mobile.jpg') : setHeaderImg('/headers/membership.jpg')
  // }, [])

  return (
    <>
    <PageHeader img={headerImg} text='Join The Club!' user={user} page='membership' />
    <p id='join-page-intro'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio morbi quis commodo odio. Tellus id interdum velit laoreet id donec. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Semper eget duis at tellus at urna. Nunc pulvinar sapien et ligula.
    </p>
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