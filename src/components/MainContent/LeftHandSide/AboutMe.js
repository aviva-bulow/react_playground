import React from "react";
import { Card } from "react-bootstrap";
import { Avatar } from 'antd';
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
    <Avatar
      size={{ xs: 24 * 3, sm: 32 * 3, md: 40 * 3, lg: 64 * 3, xl: 80 * 3, xxl: 100 * 3 }}
      src={AvivaBulow}
    />
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
      JavaScript/HTML with React+Ant.
      As an analytical thinker with a background in mathematics,
      I enjoy tackling difficult problems and exploring new ideas.
      I’m highly effective at communicating complex
      concepts across knowledge barriers."
  />
  </div>
}




export default AboutMe;