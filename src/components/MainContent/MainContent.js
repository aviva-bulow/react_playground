import React from 'react';
import AboutMe from "./AboutMe";
import ToDoList from "./ToDoList";

function MainContent() {
    return <dev>
        <header className="MainContent-header">
            <AboutMe />
            <ToDoList />
        </header>
    </dev>

}

export default MainContent;