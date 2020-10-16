import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const NavItem = (props) => {
  return (
    <Grid item  justify="space-evenly">
      <Button
        style={{  fontSize: "16px" }}
        component={Link}
        to={"/" + props.name}
        color="primary"
      >
        {props.name}
      </Button>
    </Grid>
  );
};

export default NavItem;
