import React from 'react';
import LeftHandSide from "./LeftHandSide/LeftHandSide";
import RightHandSide from "./RightHandSide/RightHandSide";
import "./MainContent.css"
import { Card, CardColumns } from 'react-bootstrap';

function MainContent() {

  return (
    <div className="MainContent-main">
      <CardColumns>
        <Card >
          <LeftHandSide />
        </Card>

        <Card>
          <RightHandSide />
        </Card>

      </CardColumns>
    </div>
  )

}

export default MainContent;