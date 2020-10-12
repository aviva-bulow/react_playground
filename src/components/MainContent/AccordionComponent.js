import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";


function AccordionComponent(props) {
  return <Accordion defaultActiveKey="0">

    <Card href={props.href}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          {props.title}
        </Accordion.Toggle>
      </Card.Header>

      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {props.body}
        </Card.Body>
      </Accordion.Collapse>

    </Card>
  </Accordion>
}

export default AccordionComponent;