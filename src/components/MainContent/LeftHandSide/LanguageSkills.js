import React from "react";
import { Row, Col, Progress } from "antd";
import AccordionComponent from "../AccordionComponent";

function LanguageSkills() {
  let body = (
    <div>
      <LanguageSkill
        name="Python"
        skillLevel="90"
        libraries={["multiprocessing", "unittest", "vpython", "numpy", "Spacy"]}
      />
      {/* <LanguageSkill name="JavaScript" skillLevel="40" /> */}
      <LanguageSkill name="C" skillLevel="65" libraries={["MPI", "OpenMp"]} />
      <LanguageSkill name="Java" skillLevel="65" libraries={["awt", "swing"]} />

      <LanguageSkill name="R" skillLevel="65" libraries={["ggplot2"]} />
      <LanguageSkill name="SQLite" skillLevel="50" libraries={[]} />
    </div>
  );

  return <AccordionComponent title="Programming Languages" body={body} />;
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
