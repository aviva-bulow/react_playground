import React from "react";
import { Card } from "react-bootstrap";
import { Image } from 'antd';
import AvivaBulow from "./AvivaBulow.jpg"
import AccordionComponent from "../AccordionComponent"
import Skills from "./Skills"

function AboutMe() {
  return (
    <div className="AboutMe">
      <Card.Body >
        <Photo />
        <MyTitle />
        <ProfessionalSummary />
        <Skills />
      </Card.Body>
    </div >
  )
}

function Photo() {
  return (
    <Image src={AvivaBulow} className="AboutMe-image" alt="Aviva's Photo" />
  )
}

function MyTitle() {
  return <Card.Title>
    Entrepreneur & Software Engineer
  </Card.Title>
}

function ProfessionalSummary() {
  return <div ><AccordionComponent
    title="Professional Summary"
    // id="professional_summary"

    body="A software engineer with 6 years experience,
      primarily developing back-end systems in Python,
      I’m currently learning front-end development in
      JavaScript/HTML with React+Bootstrap.
      As an analytical thinker with a background in mathematics,
      I enjoy tackling difficult problems and exploring new ideas.
      I’m highly effective at communicating complex
      concepts across knowledge barriers."
  />
  </div>
}




export default AboutMe;