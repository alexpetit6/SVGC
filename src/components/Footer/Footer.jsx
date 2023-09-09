import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return(
    <div id='footer'>
      <img id="footer-logo" src="/SVGC-Logo.jpeg" alt="SVGC" />
      <div id='footer-links'>
        <Link to='/'>Home</Link>
        <Link to='/events'>Event Feed</Link>
        <Link to='/calendar'>Calendar Page</Link>
        <Link to='/photos'>Photo Gallery</Link>
        <Link to='/community'>Community Service</Link>
        <Link to='/scholarships'>Scholarships</Link>
      </div>
    </div>
  )
}