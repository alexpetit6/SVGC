import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import { Button } from 'react-bootstrap';
import AuthPage from '../AuthPage/AuthPage';
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import NewEventPage from '../NewEventPage/NewEventPage';
import EventFeed from '../EventFeed/EventFeed';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import CalendarPage from '../CalendarPage/CalendarPage';
import Home from '../Home/Home';
import CommunityPage from '../CommunityPage/CommunityPage';
import ScholarshipPage from '../ScholarshipPage/ScholarshipPage';
import BlogFeed from '../BlogFeed/BlogFeed';
import BlogPostPage from '../BlogPostPage/BlogPostPage';
import BlogPostForm from '../BlogPostForm/BlogPostForm';
import JoinPage from '../JoinPage/JoinPage';
import ColorsForm from '../../components/ColorsForm/ColorsForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [headerImgs, setHeaderImgs] = useState(null);
  const [editingColors, setEditingColors] = useState(false);
  const [absolutePosition, setAbsolutePosition] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const regex = /events\/[\S*]|calendar|admin|blog./g
    regex.test(location.pathname) ? setAbsolutePosition(false) : setAbsolutePosition(true);
  }, [location]);

  function handleEditing() {
    setEditingColors(!editingColors);
  }
  
  // useEffect(() => {
  //   const rootStyles = document.querySelector(':root').style;
  //   rootStyles.setProperty('--primary-color', 'red');
  //   // function setCSSVariable(name, value) {
  //   //   rootStyles.insertRule(`:root { ${name}: ${value}; }`, rootStyles.cssRules.length);
  //   // }
  //   // setCSSVariable('--primary-color', 'red');
  // }, []);

  return (
    <main className="App">
      <>
      <NavBar absolutePosition={absolutePosition} user={user} setUser={setUser} />
      { user ? 
        editingColors ?
        <ColorsForm handleEditing={handleEditing}/>
        :
        <Button onClick={handleEditing} id='change-colors-btn' variant='warning'>Change Colors</Button>
      : 
        null
      }
      <Routes>
        { 
          user
          ?
          <>
          <Route path="/events/new" element={<NewEventPage />} />
          <Route path="/events/new/:eventId" element={<NewEventPage />} />
          <Route path="/blog/new" element={<BlogPostForm />} />
          <Route path="/blog/new/:postId" element={<BlogPostForm />} />
          </>
          :
          null
        }
        <Route path="/events" element={<EventFeed user={user} />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/blog" element={<BlogFeed user={user} />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/community" element={<CommunityPage user={user}/>} />
        <Route path="/scholarships" element={<ScholarshipPage user={user} />} />
        <Route path="/join" element={<JoinPage user={user} />} />
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<PhotoGallery archive={false} user={user} />} />
        <Route path="/photos/archive" element={<PhotoGallery archive={true} user={user} />} />
        <Route path="/admin" element={<AuthPage setUser={setUser} />} />
      </Routes>
      <Footer />
      </>
    </main>
  );
}
