import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;


function AccordionComponent(props) {

  return <Collapse >
    <Panel header={props.title} key='1'>
      {props.body}
    </Panel>
  </Collapse>
}

export default AccordionComponent;