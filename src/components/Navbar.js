import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import NavItem from "./NavItem";
import Grid from "@material-ui/core/Grid";
import MediaQuery from "react-responsive";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="primary"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ background: "none" }}
      >
        <FormatListBulletedIcon
          className="btest"
          onClick={handleClick}
          aria-haspopup="true"
          style={{
            color: "#902df6",
            fontSize: "50px",
            backgroundColor: "transparent",
          }}
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
      >
        {props.items}
      </Menu>
    </div>
  );
}

class Navbar extends Component {
  render() {
    const names = ["about", "experience", "skills", "comment", "contact"];
    const items = names.map((namer, index) => {
      return <NavItem key={index} name={namer} />;
    });

    return (
      <div>
        <AppBar
          style={{
            background: "transparent",
            boxShadow: "none",
            color: "transparent",
            justifySelf: "center",
          }}
          position="fixed"
        >
          <Toolbar>
            <MediaQuery minDeviceWidth={800}>
              <Grid container justify="center" alignItems="center">
                {items}
              </Grid>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={800}>
              <SimpleMenu items={items} />
            </MediaQuery>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
