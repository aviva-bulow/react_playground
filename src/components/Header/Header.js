import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  const date = new Date()
  let hours = date.getHours()
  let msg = ""
  if (11 <= hours && hours < 15) {
    msg = "Good day!"
  } else if (15 <= hours && hours < 23) {
    msg = "Good Afternoon"
  } else if (23 <= hours || hours < 3) {
    msg = "Good Night"
  } else {
    msg = "Good Morning!"
  }
  return (
    <div>
      <a id="home"></a>
      <Navbar sticky="top" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">
          Aviva Bulow
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#home"> Home</Nav.Link>
          <Nav.Link href="#professional_summary">Professional Summary</Nav.Link>
        </Nav>

        <Navbar.Text>
          {msg}
        </Navbar.Text>

      </Navbar>
    </div >
  )
}

export default Header;