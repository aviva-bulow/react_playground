import React from "react";
import { Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import AvivaBulow from "./AvivaBulow.jpg"
import "./MainContent.css"

function AboutMe() {
  return (
    <div className="AboutMe">
      <Card.Body >
        <Photo />
        <MyTitle />
        <ProfessionalSummary />
      </Card.Body>
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

function MyTitle() {
  return <Card.Title>
    Entrepreneur & Software Engineer
  </Card.Title>
}

function ProfessionalSummary() {
  return <Card.Text>
    A software engineer with 6 years experience,
    primarily developing back-end systems in Python,
    I’m currently learning front-end development in
    JavaScript/HTML with React+Bootstrap.
    As an analytical thinker with a background in mathematics,
    I enjoy tackling difficult problems and exploring new ideas.
    I’m highly effective at communicating complex
    concepts across knowledge barriers.
  </Card.Text>
}




export default AboutMe;