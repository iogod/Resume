import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const NavItem = (props) => {
  return (
    <Box m={0.1}>
      <Button component={Link} to={"/" + props.name} color="primary">
        {props.name}
      </Button>
    </Box>
  );
};

export default NavItem;
