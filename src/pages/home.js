import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SpeedSharpIcon from "@material-ui/icons/SpeedSharp";
import TabletMacIcon from "@material-ui/icons/TabletMac";
import HttpsIcon from "@material-ui/icons/Https";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { Link } from "react-router-dom";

import Im from "../media/image1.jpeg";

export class home extends Component {
  //Possible image function since reused in contact
  //Possible function for ICONS/Grid items
  render() {
    return (
      <div className="mainback">
        <Grid
          justify="center"
          align="center"
          container
          style={{ minHeight: "100vh", paddingTop: "10rem" }}
        >
          <Grid lg={3} xs={12} item>
            <Link to="/contact">
              <img
                className="myface"
                style={{ borderRadius: "50%" }}
                width={200}
                height={200}
                src={Im}
                alt="none"
              />
            </Link>
          </Grid>

          <Grid lg={3} xs={6} item>
            <div className="bio ">
              <h1>Roscoe.js</h1>
              <p>
                {" "}
                <div className="bioname"> Hi! I'm Roscoe </div>, nice to meet
                you and have a look around
              </p>

              <p>
                {" "}
                I have a passion for thoughtful UI and overall flow and
                feeling of the application. I enjoy building user interfaces and
                designing back-end solutions
              </p>
            </div>
          </Grid>

          <Grid xl={12} lg={12} spacing={10} item container justify="center">
            <Grid item xl={2} style={{ margin: "45px", marginRight: "10px" }}>
              <div className="hexagon">
                <SpeedSharpIcon style={{ color: "white", fontSize: "60px" }} />

                <h3>Speed</h3>
                <p>Fast repsonse time </p>
              </div>
            </Grid>

            <Grid xl={2} style={{ margin: "45px", marginRight: "10px" }} item>
              <div className="hexagon">
                <TabletMacIcon style={{ color: "white", fontSize: "60px" }} />
                <h3>Responisve</h3>
                <p>Adaptive UI for web or mobile</p>
              </div>
            </Grid>

            <Grid xl={2} item style={{ margin: "45px", marginRight: "10px" }}>
              <div className="hexagon">
                <HttpsIcon style={{ color: "white", fontSize: "60px" }} />
                <h3>Secure</h3>
                <p>Latest security practices</p>
              </div>
            </Grid>

            <Grid xl={2} style={{ margin: "45px", marginRight: "10px" }} item>
              <div className="hexagon">
                <EmojiObjectsIcon
                  style={{ color: "white", fontSize: "60px" }}
                />
                <h3>Intuitive</h3>
                <p>Easy to use UX/UI</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;
