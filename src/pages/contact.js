import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Linkedin from "../media/linkedin.jpg";
import Github from "../media/github.jpg";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import Box from "@material-ui/core/Box";
export class contact extends Component {
  //Possible change to functional component and possible contact info function and img component function
  render() {
    return (
      <div>
        <div className="bio" >
          <h1>Contact Me </h1>
        </div>

        <Grid container  justify="center"  style = {{marginTop:"10%"}}>
          <Grid item  justify="center" item md={6} style= {{marginBottom:"20%",padding:"3px"}}>
            <Box>
              <EmailIcon />
              <a
              className ="contact"
                href="mailto:johnson.roscoea@email.com"
                target="_blank"
                rel="noopener"
            
              >
               
                johnson.roscoea@gmail.com
              </a>
            </Box>

            <Box>
              <PhoneIcon />
              <a
              className ="contact"
               href="mailto:4102318059@txt.att.net"
                target="_blank"
                rel="noopener"
                color="#902df6"
              >
              
                (410)231-8059
              </a>
            </Box>
          </Grid>

          <Grid item   justify="center">
            <a
              href="https://github.com/iogod/Resume"
              target="_blank"
              rel="noopener"
            >
              <img
                className="myface"
                style={{
                  borderRadius: "50%",
                }}
                width={150}
                height={150}
                src={Github}
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
                  zIndex: "2",
                }}
                width={150}
                height={150}
                src={Linkedin}
                alt="none"
              />
            </a>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

export default contact;
