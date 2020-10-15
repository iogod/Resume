import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import NavItem from "./NavItem";

class Navbar extends Component {
  render() {
    const names = ["about", "experience", "skills", "comment", "contact"];
    const items = names.map((namer, index) => {
      return <NavItem key={index} name={namer} />;
    });

    return (
      <div>
        <Box>
          <AppBar
            style={{
              background: "transparent",
              boxShadow: "none",
              color: "transparent",
              justifySelf: "center",
            }}
            position="fixed"
          >
            <Toolbar>{items}</Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
}

export default Navbar;
