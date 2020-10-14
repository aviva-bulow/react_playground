import React from "react";
import AccordionComponent from "../AccordionComponent";
import otherSkillsData from "./OtherSkillsData";
import Skill from "./Skill";

function OtherSkills(props) {
  return otherSkillsData.map((skillClass) => (
    <AccordionComponent
      title={skillClass.title}
      body={skillClass.skillList.map(Skill)}
    />
  ));
}

export default OtherSkills;