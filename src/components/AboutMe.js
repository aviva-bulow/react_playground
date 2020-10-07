import React from "react";
import AvivaBulow from "./AvivaBulow.jpg"
import "./AboutMe.css"


function AboutMe() {
    return (
        <div>
            <Photo />
            <Name />
            <Hobbies />
            <LinkedIn />
        </div>
    )
}

function Photo() {
    return <img src={AvivaBulow} className="AboutMe-image" alt="Aviva's Photo" />
}

function Name() {
    return <h1>
        Aviva Bulow
    </h1>
}

function Hobbies() {
    return <ul>
        <li>Running</li>
        <li>Backpacking</li>
        <li>Gardening</li>
    </ul>
}

function LinkedIn() {
    return <a
        className="AboutMe-linkedin"
        href="https://www.linkedin.com/in/aviva-bulow/"
        target="_blank"
        rel="noopener noreferrer"
    >
        Linked In
        </a>

}

export default AboutMe;