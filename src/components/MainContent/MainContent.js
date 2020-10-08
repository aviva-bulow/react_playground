import React from 'react';
import AboutMe from "./AboutMe";
import ToDoList from "./ToDoList";
import "./MainContent.css"
import { Card, CardColumns } from 'react-bootstrap';

function MainContent() {

  return (
    <header className="MainContent-header">
      <CardColumns>
        <Card>
          <AboutMe />
        </Card>

        <Card>
          <ToDoList />
        </Card>

      </CardColumns>
    </header>)

}

export default MainContent;