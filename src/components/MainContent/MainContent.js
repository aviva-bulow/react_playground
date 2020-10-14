import React from 'react';
import LeftHandSide from "./LeftHandSide/LeftHandSide";
import RightHandSide from "./RightHandSide/RightHandSide";
import { Card } from 'react-bootstrap';
import { Row } from 'antd';


function MainContent() {

  return (
    <div >
      <Row>
        <Card >
          <LeftHandSide />
        </Card>

        <Card>
          <RightHandSide />
        </Card>

      </Row>
    </div>
  )

}

export default MainContent;