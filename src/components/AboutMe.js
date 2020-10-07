import React from "react";
import AvivaBulow from "./AvivaBulow.jpg"
import "./AboutMe.css"


function AboutMe() {
    return (
        <div>
            <Photo />
            <Name />
            <Hobbies />
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

export default AboutMe;