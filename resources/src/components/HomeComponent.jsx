import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

export default function HomeComponent(){

  return(
    <div className="main">
      <h3 className="main-heading">Quiz App</h3>
      <Link to="play-quiz" className="mainButton">
        <button className="mainButton">Play</button>
      </Link>
    </div>
  )
}