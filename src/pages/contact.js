import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import Linkedin from "../media/linkedin.jpg";
import Github from "../media/github.jpg";
import Box from "@material-ui/core/Box";
export class contact extends Component {
    //Possible change to functional component and possible contact info function and img component function
  render() {
    return (
      <div>
        <div className="bio" style={{ paddingTop: "30px" }}>
          <h1>Contact Me </h1>
        </div>
<Grid container justify = "center" alignContent="center">

<Grid item justify="space-evenly">

      <Box  m={7}>

      <PhoneIcon fontSize="large" style={{ color: "#BEBEBE" }}  />
            <a className="contact" href={"mailto:" + "4102318059@txt.att.net"} style= {{color: "#902DF6"}}>
              (410)-231-8059
            </a>
      </Box>
       

</Grid>

<Grid item justify="space-evenly">

       <Box m={8}>

      

            <EmailIcon style={{ color: '#BEBEBE' }} />
            <a
              className="contact"
              href={"mailto:" + "johnson.roscoea@gmail.com"} style={{ color: "#902DF6" }} 
            >
              johnson.roscoea@gmail.com
            </a>

            </Box>

</Grid>
</Grid>
       

          
          
       
          <a
            href="https://www.linkedin.com/in/roscoe-johnson-a23498177/"
            target="_blank"
          >
            <img
              className="myface"
              style={{
                borderRadius: "50%",
                position: "absolute",
                left: "50%",
                bottom: "18%",
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
                left: "38%",
                bottom: "18%",
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
