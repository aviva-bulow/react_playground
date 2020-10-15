import React from "react";
import LeftHandSide from "./LeftHandSide/LeftHandSide";
import RightHandSide from "./RightHandSide/RightHandSide";
import { Row, Card, Col } from "antd";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col span={8}>
              <Card>
                <LeftHandSide />
              </Card>
            </Col>

            <Col span={16}>
              <RightHandSide />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default MainContent;
