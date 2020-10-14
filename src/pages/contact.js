import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import Linkedin from '../media/linkedin.jpg'
import Github from '../media/github.jpg'
import Divider from '@material-ui/core/Divider';
export class contact extends Component {
    render() {
        return (
            <div>
   <div className="bio"  style={{paddingTop:'30px'}}> 

<h1>Contact Me </h1>
</div>
                <Grid justify= 'center'  container  >

                    <Grid item lg={4} style = {{marginBottom:'15px'}} >  
                    <PhoneIcon  fontSize ="large" style = {{color:'#902DF6'}}/>
                   <a   className = "contact" href={"mailto:" + "4102318059@txt.att.net"}>(410)-231-8059</a>
                   <EmailIcon style = {{color:'#902DF6'}} />
                   <a className = "contact" href={"mailto:" + "johnson.roscoea@gmail.com"}>johnson.roscoea@gmail.com</a>
                    </Grid>
                    <a href= "https://www.linkedin.com/in/roscoe-johnson-a23498177/" target="_blank"  >
                    <img  className = "myface" style = {{borderRadius: '50%',position:'absolute',left:'50%',top:'30%',zIndex:'2'}} width = {200} height = {200}  src = {Linkedin} alt = "none"/>
                    </a>
                   <a href= "https://github.com/iogod/Resume" target="_blank" rel="noopener" >
                   <img  className = "myface" style = {{borderRadius: '50%',position:'absolute',left:'38%',top:'30%'}} width = {200} height = {200}  src = {Github} alt = "none"/>
</a>
                  

                  

                  

                   
                    

                 
             
                </Grid>
            </div>
        )
    }
}

export default contact
