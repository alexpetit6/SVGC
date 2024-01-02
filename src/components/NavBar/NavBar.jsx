import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser, absolutePosition }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar expand="lg" data-bs-theme="dark" id={absolutePosition ? 'absolute-nav' : 'static-nav'}>
      {/* <img src="/blossom.png" alt="" /> */}
      <Container>
        <Navbar.Brand href="/"><img id="nav-logo" src="/SVGC-Logo.jpeg" alt="SVGC" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/events'>Events</Nav.Link>
            <Nav.Link href='/calendar'>Calendar</Nav.Link>
            <Nav.Link href='/blog'>Blog</Nav.Link>
            <Nav.Link href='/community'>Community</Nav.Link>
            <Nav.Link href='/photos'>Photos</Nav.Link>
            <Nav.Link href='/join'>Membership</Nav.Link>
            { 
              user 
              ? 
              <>
                <Nav.Link href='/events/new'>New Event</Nav.Link>
                <Nav.Link href='/' onClick={handleLogOut}>Logout</Nav.Link> 
              </>
              : 
              null 
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}