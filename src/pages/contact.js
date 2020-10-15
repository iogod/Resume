import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Linkedin from "../media/linkedin.jpg";
import Github from "../media/github.jpg";
import Phone from "../media/phone.jpg";
import Email from "../media/email.png";
import Box from "@material-ui/core/Box";
export class contact extends Component {
  //Possible change to functional component and possible contact info function and img component function
  render() {
    return (
      <div>
        <div className="bio" style={{ paddingTop: "30px" }}>
          <h1>Contact Me </h1>
        </div>
        
        <a
       href={"mailto:" + "johnson.roscoea@gmail.com"}
        >
          <img
            className="myface"
            style={{
              borderRadius: "50%",
              position: "absolute",
              left: "5%",
              bottom: "0%",
              zIndex: "2",
            }}
            width={200}
            height={200}
            src={Email}
            alt="none"
          />
        </a>




        <a
           href={"mailto:" + "4102318059@txt.att.net"}
        >
          <img
            className="myface"
            style={{
              borderRadius: "50%",
              position: "absolute",
              left: "29%",
              bottom: "0%",
              zIndex: "2",
            }}
            width={200}
            height={200}
            src={Phone}
            alt="none"
          />
        </a>


        <a
          href="https://www.linkedin.com/in/roscoe-johnson-a23498177/"
          target="_blank"
        >
          <img
            className="myface"
            style={{
              borderRadius: "50%",
              position: "absolute",
              left: "57%",
              bottom: "0%",
              zIndex: "2",
            }}
            width={200}
            height={200}
            src={Linkedin}
            alt="none"
          />
        </a>
        <a
          href="https://github.com/iogod/Resume"
          target="_blank"
          rel="noopener"
        >
          <img
            className="myface"
            style={{
              borderRadius: "50%",
              position: "absolute",
              left: "88%",
              bottom: "0%",
            }}
            width={200}
            height={200}
            src={Github}
            alt="none"
          />
        </a>
      </div>
    );
  }
}

export default contact;
