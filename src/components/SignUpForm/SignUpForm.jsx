import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'whyyyyyyy' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <Form className='event-form' autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <Form.Label>Confirm</Form.Label>
            <Form.Control type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <div className="d-grid gap-2">
              <Button type='submit' disabled={disable} variant="success" size="lg">
                Sign Up!
              </Button>
          </div>
          </Form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}