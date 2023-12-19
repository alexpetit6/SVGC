import './Footer.css'
import { Link } from 'react-router-dom'
import MailchimpForm from '../MailchimpForm/MailchimpForm'

export default function Footer() {
  return(
    <div id='footer'>
      <img id="footer-logo" src="/SVGC-Logo.jpeg" alt="SVGC" />
      <MailchimpForm />
      <div id='footer-links'>
        <Link to='/events'>Events</Link>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/photos'>Photos</Link>
        <Link to='/community'>Community Service</Link>
        <Link to='/scholarships'>Scholarships</Link>
      </div>
    </div>
  )
}