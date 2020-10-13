import { DatePicker } from "antd";
import React from "react";
import { Card, Container, ProgressBar, Row, Col, } from "react-bootstrap";
import AccordionComponent from "../AccordionComponent";

function LanguageSkills() {
  return <div>
    <LanguageSkill name="Python" skillLevel="90" libraries={["multiprocessing", "unittest", "vpython", "numpy", "Spacy"]} />
    {/* <LanguageSkill name="JavaScript" skillLevel="40" /> */}
    <LanguageSkill name="Java" skillLevel="65" libraries={["awt", "swing"]} />

  </div>
}

function LanguageSkill(props) {
  console.log(props.name)
  // props.libraries
  console.log(props.skillLevel > 10)
  let title = (<Container>
    <Row >
      <Col ><Card.Text>{props.name}</Card.Text></Col>
      <Col ><ProgressBar variant="success" now={props.skillLevel} label={`${props.skillLevel}%`} /></Col>
    </Row>
  </Container>
  )
  return <AccordionComponent title={title} body={props.libraries.map(LanguageLibrary)} />
}

function LanguageLibrary(name) {
  return <Card.Text>{name}</Card.Text>

}

export default LanguageSkills;