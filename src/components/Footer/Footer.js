import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return <Navbar expand="lg" variant="dark" bg="dark">
    <Navbar.Text>
      This is the footer.
      </Navbar.Text>
  </Navbar>
}

export default Footer;