import React from "react";
import { Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import AvivaBulow from "./AvivaBulow.jpg"
import "./MainContent.css"

function AboutMe() {
  return (
    <div className="AboutMe">
      <Card >
        <Photo />
        <Hobbies />
        <LinkedIn />
      </Card>
    </div >
  )
}

function Photo() {
  return (
    <Card style={{ width: '10rem' }}>
      <Image src={AvivaBulow} className="AboutMe-image" alt="Aviva's Photo" fluid="true" roundedCircle="true" />
    </Card>
  )
}


function Hobbies() {
  return (
    <div>
      <a id="hobbies"></a>

      <Card.Body>
        <Card.Title>Hobbies</Card.Title>
        <Card.Text>
          <ul>
            <li>Running</li>
            <li>Backpacking</li>
            <li>Gardening</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </div>
  )
}

function LinkedIn() {
  return <a
    className="AboutMe-link"
    href="https://www.linkedin.com/in/aviva-bulow/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Linked In
        </a>

}

export default AboutMe;