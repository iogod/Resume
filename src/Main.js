import React, { Component } from "react";
import Skyline from "./media/airplane.png";
import Typography from "@material-ui/core/Typography";
import "./Main.css";
import { Link } from "react-router-dom";
import Background from "./components/Background"

export class Main extends Component {
  render() {
    return (
      <div className="lander">
       
        <img
          onLoad={"callbackAfterImageIsDownloaded"}
          style={{ width: "100%", height: "100%", position: "fixed" }}
          src={Skyline}
          alt="no"
        ></img>
        <h1 style={{ top: "20%" }}>Roscoe Johnson Resume</h1>
        <h5>A journey of a thousand miles begins with a single step</h5>

        <Link
          style={{ backgroundColor: "transparent", background: "transparent" }}
          to="/about"
          className="bouncer"
        >
          >
        </Link>
      </div>
    );
  }
}

export default Main;
