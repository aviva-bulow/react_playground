import React from "react";
import AccordionComponent from "../AccordionComponent";
import Skill from "./Skill";

function OtherSkillGroups(props) {
  console.log(props.title);
  console.log(props.skillList);

  return (
    <AccordionComponent title={props.title} body={props.skillList.map(Skill)} />
  );
}

export default OtherSkillGroups;
