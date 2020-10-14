import React from "react";
import { Card } from "antd";

function Skill(skillName) {
  return (
    <Card size="small">
      <p>{skillName}</p>
    </Card>
  );
}

export default Skill;
