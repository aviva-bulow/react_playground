import React from "react";
import AccordionComponent from "../AccordionComponent"
import LanguageSkills from "./LanguageSkills"


function Skills() {

  let skills = <div>
    <LanguageSkills />
    {/* <ComputingSkills /> */}
    {/* <MathSkills /> */}
    {/* <ScienceSkills /> */}
    {/* <LeadershipSkills /> */}

  </div >

  return <AccordionComponent
    title="Skills"
    body={skills}
  // defaultActiveKey="0"
  />

}



export default Skills;