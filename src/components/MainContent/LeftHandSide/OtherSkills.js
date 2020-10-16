import { Collapse } from "antd";
import React from "react";
import otherSkillsData from "./OtherSkillsData";
import Skill from "./Skill";

class OtherSkills extends React.Component {
  render() {
    return (
      <Collapse>
        {otherSkillsData.map((skillClass) => (
          <Collapse.Panel header={skillClass.title} key={skillClass.title}>
            {skillClass.skillList.map((skillName) => (
              <Skill name={skillName} key={skillName} />
            ))}
          </Collapse.Panel>
        ))}
      </Collapse>
    );
  }
}

export default OtherSkills;
