import React from 'react';
import { Card } from 'antd';
import AccordionComponent from '../AccordionComponent';

function OtherSkillGroups(props) {
  console.log(props.title)
  console.log(props.skillList)

  // let body = <div>{}</div>

  return <AccordionComponent title={props.title} body={props.skillList.map(Skill)} />
}

function Skill(skillName) {
  return <Card size='small'><p>{skillName}</p></Card>
}

export default OtherSkillGroups;