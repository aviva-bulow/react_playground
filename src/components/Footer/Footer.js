import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return <Container>
    <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
      <Navbar.Text>
        This is the footer.
      </Navbar.Text>
    </Navbar>
  </Container>
}

export default Footer;