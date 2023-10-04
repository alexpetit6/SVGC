import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
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

export default function App() {
  const [user, setUser] = useState(getUser());
  const [absolutePosition, setAbsolutePosition] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const regex = /events\/[\S*]|calendar|admin|blog/g
    regex.test(location.pathname) ? setAbsolutePosition(false) : setAbsolutePosition(true);
  }, [location]);
  

  return (
    <main className="App">
      <>
      <NavBar absolutePosition={absolutePosition} user={user} setUser={setUser} />
      <Routes>
        { 
          user
          ?
          <>
          <Route path="/events/new" element={<NewEventPage />} />
          <Route path="/blog/new" element={<BlogPostForm />} />
          <Route path="/events/new/:eventId" element={<NewEventPage />} />
          </>
          :
          null
        }
        <Route path="/events" element={<EventFeed user={user} />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/blog" element={<BlogFeed />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/community" element={<CommunityPage user={user}/>} />
        <Route path="/scholarships" element={<ScholarshipPage />} />
        <Route path="/join" element={<JoinPage />} />
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
