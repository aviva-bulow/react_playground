import React from "react";
import { Card } from "antd";
import AccordionComponent from "../AccordionComponent";
import Skill from "./Skill";

function OtherSkillGroups(props) {
  console.log(props.title);
  console.log(props.skillList);

  // let body = <div>{}</div>

  return (
    <AccordionComponent title={props.title} body={props.skillList.map(Skill)} />
  );
}

export default OtherSkillGroups;
