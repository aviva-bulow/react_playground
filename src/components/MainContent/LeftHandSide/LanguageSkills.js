import React from "react";
import { Row, Col, Progress, Collapse } from "antd";
import languageSkillsData from "./LanguageSkillsData";

class LanguageSkills extends React.Component {
  render() {
    return (
      <Collapse>
        <Collapse.Panel header="Programming Languages">
          {languageSkillsData.map((languageSkill) => (
            <LanguageSkill
              name={languageSkill.name}
              key={languageSkill.name}
              skillLevel={languageSkill.skillLevel}
              libraries={languageSkill.libraries}
            />
          ))}
        </Collapse.Panel>
      </Collapse>
    );
  }
}

class LanguageSkill extends React.Component {
  render() {
    let title = (
      <Row>
        <Col span={8}>
          <p>{this.props.name}</p>
        </Col>
        <Col span={13} offset={3}>
          <Progress
            percent={this.props.skillLevel}
            size="small"
            strokeColor="green"
          />
        </Col>
      </Row>
    );
    let showArrow = true;
    // if (this.props.libraries.length < 1) {
    //   showArrow = false;
    // }
    return (
      <Collapse>
        <Collapse.Panel header={title} showArrow={showArrow}>
          {this.props.libraries.map((libName) => (
            <p>{libName}</p>
          ))}
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export default LanguageSkills;
