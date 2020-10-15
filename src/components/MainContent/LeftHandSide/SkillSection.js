import React from "react";
import LanguageSkills from "./LanguageSkills";
import OtherSkills from "./OtherSkills";

class SkillSection extends React.Component {
  render() {
    return (
      <div>
        <LanguageSkills />

        <OtherSkills />
      </div>
    );
  }
}

export default SkillSection;
