import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Slider from "@material-ui/core/Slider";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { withStyles} from "@material-ui/core/styles";
import SkillData from "../datasource/SkillDataSource";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const PrettoSlider = withStyles({
  root: {
    color: "#902DF6",
    height: 10,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

class skills extends Component {
  render() {
    const sk = SkillData.map((skill, index) => {
      return (
        <ListItem key={index}>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={skill.level}
          />
          <ListItemText
            style={{
              fontFamily: "Open Sans",
              marginLeft: "50px",
              textAlign: "right",
            }}
            primary={skill.name}
            width={40}
          />
        </ListItem>
      );
    });
    return (
      <React.Fragment>
        <div className="bio" style={{ paddingTop: "10%" }}>
          <h1>Skills</h1>
        </div>

        <Grid container justify="center" style={{ paddingTop: "5px" }}>
          <Grid item xl={4} md={6} sm={6} xs={6}>
            <List style={{ width: "100%" }}>{sk}</List>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default skills;
