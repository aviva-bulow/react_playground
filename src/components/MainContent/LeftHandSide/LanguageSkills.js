import React from "react";
import { Card, Container, ProgressBar, Row, Col } from "react-bootstrap";
import AccordionComponent from "../AccordionComponent";

function LanguageSkills() {
  return <div>
    <LanguageSkill name="Python" skillLevel="90" libraries={["multiprocessing", "unittest", "vpython", "numpy", "Spacy"]} />
    {/* <LanguageSkill name="JavaScript" skillLevel="40" /> */}
  </div>
}

function LanguageSkill(props) {
  console.log(props.name)
  // props.libraries
  console.log(props.skillLevel > 10)
  let title = (< Container >
    <Row>

      <Col><Card.Title>{props.name}</Card.Title></Col>
      <Col><ProgressBar variant="success" now={props.skillLevel} label={`${props.skillLevel}%`} /></Col>
    </Row>
  </Container >
  )
  return <AccordionComponent title={title} body={props.libraries.map(LanguageLibrary)} />
}

function LanguageLibrary(name) {
  return <Card.Text>{name}</Card.Text>

}

export default LanguageSkills;