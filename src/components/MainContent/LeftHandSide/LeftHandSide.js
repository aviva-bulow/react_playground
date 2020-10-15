import React from "react";
import AboutMe from "./AboutMe";
import SkillSection from "./SkillSection";

class LeftHandSide extends React.Component {
  render() {
    return (
      <div>
        <AboutMe />
        <SkillSection />
      </div>
    );
  }
}

export default LeftHandSide;
