import React from "react";
import AvivaBulow from "./AvivaBulow.jpg"
import "./MainContent.css"


function AboutMe() {
  return (
    <div className="AboutMe">
      <Photo />
      <Hobbies />
      <LinkedIn />
    </div>
  )
}

function Photo() {
  return <img src={AvivaBulow} className="AboutMe-image" alt="Aviva's Photo" />
}


function Hobbies() {
  return (
    <div>
      <a id="hobbies"></a>
      <h3>Hobbies</h3>
      <ul>
        <li>Running</li>
        <li>Backpacking</li>
        <li>Gardening</li>
      </ul>
    </div>
  )
}

function LinkedIn() {
  return <a
    className="AboutMe-link"
    href="https://www.linkedin.com/in/aviva-bulow/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Linked In
        </a>

}

export default AboutMe;