import React from "react";
import { Card, Form } from "react-bootstrap";

function ToDoList() {
  let toDo = ["Learn React", "Set up garden timelapse", "Work on resume", "Create personal website"]

  return (
    <div className="ToDoList">
      <Card.Title>
        ToDo List
      </Card.Title>

      <Form>
        {toDo.map(ListItem)}

      </Form>
    </div>
  )
}

function ListItem(text) {
  return (
    <Form.Check
      type='checkbox'
      label={`${text}`}
    />
  )
}

export default ToDoList;