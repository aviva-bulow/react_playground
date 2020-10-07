import React from 'react';
import AboutMe from "./AboutMe";
import ToDoList from "./ToDoList";
import "./MainContent.css"

function MainContent() {

    return (
        <header className="MainContent-header">
            <AboutMe />
            <ToDoList />
        </header>)

}

export default MainContent;