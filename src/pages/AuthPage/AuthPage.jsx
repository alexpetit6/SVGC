import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Button } from 'react-bootstrap';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1 className='text-center'>AuthPage</h1>
      {/* <Button id='signup-btn' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</Button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          : */}
          <LoginForm setUser={setUser} />
      {/* } */}
    </main>
  );
}