import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Desi from "../components/Description";
import Exp from "../datasource/Exp";
import Dialog from "../components/Dialog";

export class experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      dialogStatus: false,
    };
  }

  updateSelected(info) {
    this.setState({ selectedImage: info, dialogStatus: true });
  }
  closeDialog() {
    this.setState({ dialogStatus: false });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.selectedImage != prevState.selectedImage) {
    }
  }

  render() {
    const expCards = Exp.exp.map((item, index) => {
      return (
        <Grid xl={3} min item>
          <Desi
            onClicker={() => this.updateSelected(item)}
            key={index}
            item={item}
          />
        </Grid>
      );
    });

    return (
      <div>
        {this.state.dialogStatus && (
          <Dialog
            selected={this.state.selectedImage}
            closer={() => {
              this.closeDialog();
            }}
          />
        )}
        <Grid
          justify="center"
          spacing={10}
          container
          style={{ minHeight: "100vh", marginTop: "4%" }}
        >
          {expCards}
        </Grid>
      </div>
    );
  }
}

export default experience;
