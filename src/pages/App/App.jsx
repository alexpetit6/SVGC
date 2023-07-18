import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewEventPage from '../NewEventPage/NewEventPage';
import EventFeed from '../EventFeed/EventFeed';
import NavBar from '../../components/NavBar/NavBar';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/events/new" element={<NewEventPage />} />
              <Route path="/events/new/:eventId" element={<NewEventPage />} />
              <Route path="/events" element={<EventFeed />} />
              <Route path="/photos" element={<PhotoGallery />} />
              <Route path="/users" element={<AuthPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
