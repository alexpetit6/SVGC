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
    <Navbar expand="lg" id={absolutePosition ? 'absolute-nav' : 'static-nav'}>
      {/* <img src="/blossom.png" alt="" /> */}
      <Container>
        <Navbar.Brand href="/"><img id="nav-logo" src="/SVGC-Logo.jpeg" alt="SVGC" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/events'>Event Feed</Nav.Link>
            <Nav.Link href='/calendar'>Calendar Page</Nav.Link>
            <Nav.Link href='/photos'>Photo Gallery</Nav.Link>
            <Nav.Link href='/community'>Community Service</Nav.Link>
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