import React from "react";
import { Row, Col, Progress } from "antd";
import AccordionComponent from "../AccordionComponent";
import languageSkillsData from "./LanguageSkillsData";

function LanguageSkills() {
  return (
    <AccordionComponent
      title="Programming Languages"
      body={languageSkillsData.map((languageSkill) => (
        <LanguageSkill
          name={languageSkill.name}
          skillLevel={languageSkill.skillLevel}
          libraries={languageSkill.libraries}
        />
      ))}
    />
  );
}

function LanguageSkill(props) {
  console.log(props.name);
  // props.libraries
  console.log(props.skillLevel > 10);

  let title = (
    <Row>
      <Col span={8}>
        <p>{props.name}</p>
      </Col>
      <Col span={13} offset={3}>
        <Progress percent={props.skillLevel} size="small" strokeColor="green" />
      </Col>
    </Row>
  );
  return (
    <AccordionComponent
      title={title}
      body={props.libraries.map(LanguageLibrary)}
    />
  );
}

function LanguageLibrary(name) {
  return <p>{name}</p>;
}

export default LanguageSkills;
