import React from "react";
import LanguageSkills from "./LanguageSkills"
import OtherSkillGroups from "./OtherSkillGroups"

function Skills() {


  return <div>
    <LanguageSkills />
    <OtherSkillGroups title="Computing Skills" skillList={["Object Oriented Design", "Unit Testing", "Complexity Analysis", "Parallel Computing", "Learning Languages"]} />
    <OtherSkillGroups title="Mathematical Talents" skillList={["Probability and Statistics", "Algorithm Analysis", "Graph Theory", "Proof Construction and Validation"]} />
    <OtherSkillGroups title="Science" skillList={["Experiment Design", "Data Interpretation", "Computational Modeling", "Data Visualization"]} />
    {/* <LeadershipSkills /> */}
  </div>

}



export default Skills;