import React from "react";
import { Card } from "antd";

class Skill extends React.Component {
  render() {
    return (
      <Card size="small">
        <p>{this.props.name}</p>
      </Card>
    );
  }
}

export default Skill;
