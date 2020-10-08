import React from "react";
import { Card, Form } from "react-bootstrap";
import "./MainContent.css"

function ToDoList() {
  return (
    <div className="ToDoList">
      <Card.Title>
        ToDo List
      </Card.Title>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="This is an item">

        </Form.Check>
      </Form.Group>
    </div>
  )
}

export default ToDoList;