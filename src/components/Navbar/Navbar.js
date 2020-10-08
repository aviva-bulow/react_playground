import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  const date = new Date()
  let hours = date.getHours()
  let msg = ""
  if (11 <= hours && hours < 15) {
    msg = "Good day!"
  } else if (15 <= hours && hours < 23) {
    msg = "Good Evening"
  } else if (23 <= hours || hours < 3) {
    msg = "Good Night"
  } else {
    msg = "Good Morning!"
  }
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        Navbar with text.
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {msg}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar;