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

export default function App() {
  const [user, setUser] = useState(getUser());
  const [absolutePosition, setAbsolutePosition] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const regex = /events\/[\S*]|calendar|admin/g
    regex.test(location.pathname) ? setAbsolutePosition(false) : setAbsolutePosition(true);
  }, [location]);
  

  return (
    <main className="App">
      <>
      <NavBar absolutePosition={absolutePosition} user={user} setUser={setUser} />
      <Routes>
        <Route path="/events" element={<EventFeed user={user} />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/scholarships" element={<ScholarshipPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<PhotoGallery archive={false} user={user} />} />
        <Route path="/photos/archive" element={<PhotoGallery archive={true} user={user} />} />
        <Route path="/admin" element={<AuthPage setUser={setUser} />} />
      </Routes>
      { 
        user
        ?
        <Routes>
          <Route path="/events/new" element={<NewEventPage />} />
          <Route path="/events/new/:eventId" element={<NewEventPage />} />
        </Routes>
        :
        null
      }
      <Footer />
      </>
    </main>
  );
}
