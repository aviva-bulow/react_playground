import React from "react";
import { Collapse } from "antd";

function AccordionComponent(props) {

  return <Collapse >
    <Collapse.Panel header={props.title} >
      {props.body}
    </Collapse.Panel>
  </Collapse>
}

export default AccordionComponent;