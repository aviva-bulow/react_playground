import React from "react";
import AccordionComponent from "../AccordionComponent";
import otherSkillsData from "./OtherSkillsData";
import Skill from "./Skill";

class OtherSkills extends React.Component {
  render() {
    return otherSkillsData.map((skillClass) => (
      <AccordionComponent
        title={skillClass.title}
        body={skillClass.skillList.map((skillName) => (
          <Skill name={skillName} key={skillName} />
        ))}
        key={skillClass.title}
      />
    ));
  }
}

export default OtherSkills;
