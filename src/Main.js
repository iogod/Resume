import React, { Component } from "react";
import Skyline from "./media/airplane.jpeg";
import "./Main.css";

let Photo = () => {
  return (
    <img
      onLoad={"callbackAfterImageIsDownloaded"}
      style={{ width: "100%", height: "100%", position: "fixed" }}
      src={Skyline}
      alt="no"
    ></img>
  );
};

export class Main extends Component {
  render() {
    return (
      <div className="lander">
        <Photo />
        <h5>A journey of a thousand miles begins with a single step</h5>
        <div
          style={{
            backgroundColor: "red",
            position: "absolute",
            top: "50%",
            right: "100%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            zIndex: "20",
          }}
        >
          <h1> hi</h1>
        </div>
      </div>
    );
  }
}

export default Main;
