import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
    navigate('/events')
  }

  return (
    <div>
      <div className="form-container">
        <Form className="event-form" autoComplete="off" onSubmit={handleSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            onChange={handleChange} 
            value={credentials.email} 
            name='email' 
            type='text'
            required
          />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <div className="d-grid gap-2">
            <Button type='submit' variant="success" size="lg">
              Submit!
            </Button>
          </div>
        </Form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}