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
import BlogFeed from '../BlogFeed/BlogFeed';
import BlogPostPage from '../BlogPostPage/BlogPostPage';
import BlogPostForm from '../BlogPostForm/BlogPostForm';
import JoinPage from '../JoinPage/JoinPage';
import About from '../About/About';
import ColorsForm from '../../components/ColorsForm/ColorsForm';
import { getColors } from '../../utilities/colors-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [colors, setColors] = useState(null);
  const [headerImgs, setHeaderImgs] = useState(null);
  const [editingColors, setEditingColors] = useState(false);
  const [absolutePosition, setAbsolutePosition] = useState(true);
  const location = useLocation();

  useEffect(() => {
    async function Colors() {
      const colors = await getColors();
      setColors(colors);
      console.log(colors.text);
      const rootStyles = document.querySelector(':root').style;
      rootStyles.setProperty('--primary-color', colors.primary);
      rootStyles.setProperty('--secondary-color', colors.secondary);
      rootStyles.setProperty('--background-color', colors.background);
      rootStyles.setProperty('--text-color', colors.text);
      rootStyles.setProperty('--accent1', colors.accent);
    }
    Colors();
  }, []);

  useEffect(() => {
    const regex = /events\/[\S*]|calendar|admin|blog./g
    regex.test(location.pathname) ? setAbsolutePosition(false) : setAbsolutePosition(true);
  }, [location]);

  function handleEditing() {
    setEditingColors(!editingColors);
  }
  
  return (
    <main className="App">
      <>
      <NavBar absolutePosition={absolutePosition} user={user} setUser={setUser} />
      { user ? 
        editingColors ?
        <ColorsForm colors={colors} setColors={setColors} handleEditing={handleEditing}/>
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
        <Route path="/" element={<Home user={user} />} />
        <Route path="/events" element={<EventFeed user={user} />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/blog" element={<BlogFeed user={user} />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/community" element={<CommunityPage user={user}/>} />
        <Route path="/photos" element={<PhotoGallery archive={false} user={user} />} />
        <Route path="/photos/archive" element={<PhotoGallery archive={true} user={user} />} />
        <Route path="/join" element={<JoinPage user={user} />} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/admin" element={<AuthPage setUser={setUser} />} />
      </Routes>
      <Footer />
      </>
    </main>
  );
}
