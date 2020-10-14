import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FV from "./FormValidation";
import Lister from "../components/Lister";
import CircularProgress from "@material-ui/core/CircularProgress";
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


class comment extends Component {
  constructor(props) {
    super(props);
//Possible refactor the render method got pretty big
    this.state = {
      Name: "",
      Organization: "",
      Comment: "",
      errors: {
        Name: "",
        Comment: "",
        Organization: "",
      },
      loading: true,
      comments: [],
      networkStaus: false,
    };

    // this.caller = this.caller.bind(this)
  }

  async componentDidMount() {
    if (this.checkNetworkConnection()) {
      Axios.get("/comment")
        .then((res) => {
          const { info, refs } = res.data;

          info.length > 0 && this.setState({ comments: info });
          this.setState({ loading: false });
        })
        .catch((err) => {
        console.log(err)
        });
    } else {
      this.setState({ networkStaus: true });
    }
    window.addEventListener("online", () => {
      this.setState({ networkStaus: false }); //Check for internet connection, reload on connection established
      this.componentDidMount();
    });
  }

  deleteComment = (com) => {
    this.setState({ loading: true });
    Axios.delete("/comment/" + com, (req, res) => {
      this.setState({ loading: false });
    }).catch((err) => {   //Pass function to child to remove from parent state. Passed as arrow function, call as arrow function removing local context
      console.log(err);
    });

    this.setState({ loading: false });
    this.setState((prevState) => {
      let commFilter = prevState.comments.filter((comi) => {
        return comi.id != com;
      });
      return { comments: commFilter };
    });
  };
  checkNetworkConnection = () => {
    return window.navigator.onLine;  //Check connection return Boolean
  };

  showNetworkConnection = () => {
    {
      const handleClose = () => {
        this.setState({ networkStaus: false, loading: false }); //Control UI/State to show/close network error
      };
      return (
        <div>
          <Dialog
            open={this.state.networkStaus}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle color="primary" id="alert-dialog-slide-title">
              {"Network Error"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Please check internet connection
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleClose}>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  };

  handleSubmit = () => {
    this.setState({ loading: true });
    const { Name, Organization, Comment } = this.state;

    if (this.checkNetworkConnection()) {
      let Note = {
        Name: Name.trim(),
        Organization: Organization.trim(),  //Check for network then for empty required fields, set Errors or send to server
        Comment: Comment.trim(),
      };
      var error = FV(Note);
      !error
        ? this.pushComments()
        : this.setState({ errors: error, loading: false });
    } else {
      this.setState({ networkStaus: true });
    }
  };

  handleClearAll = () => {
    this.setState({ Name: "", Organization: "", Comment: "" }); 
  };

  pushComments = () => {
    const { Name, Organization, Comment } = this.state;
    let Note = { creator: Name, organization: Organization, comment: Comment };

    this.setState({ loading: true });     
    this.postComment(Note);
    this.setState({ loading: false }); //UI Control prior to calling async to post validated data 
    this.handleClearAll();
  };

  async postComment(commenter) {
    await Axios.post("/comment", commenter)
      .then((post) => {
        const {
          data: { comment },
        } = post;

        this.setState({
          comments: [comment, ...this.state.comments],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClear = (e) => {
    
    this.setState((state) => ({
      errors: {
        ...state.errors,      //review spread to remove errors syntax
        [e.target.name]: "",
      },
    }));
  };

  handleUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });  //Update State on user input
  };

  render() {
    return (
      <div>
        <div className="bio" style={{ paddingTop: "30px" }}>
          <h1>Comments</h1>
        </div>
    {/* {'Possible function to create UI, since it's only used in one place, lets keep it moving'} */}
        <Grid justify="center" style={{ marginBottom: "30px" }} container>
          <TextField
            value={this.state.Name}
            onChange={this.handleUpdate}
            onClick={this.handleClear}
            name="Name"
            error={this.state.errors.Name.length > 0 ? true : false}
            helperText={
              this.state.errors.Name.length > 0 ? "Required Field" : " "
            }
            required
            style={{ width: "25%" }}
            id="standard-required"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={this.state.Organization}
            onChange={this.handleUpdate}
            name="Organization"
            onClick={this.handleClear}
            style={{ paddingBottom: "30px" }}
            style={{ width: "25%" }}
            id="outlined-basic"
            label="Organization"
            variant="outlined"
          />

          <Grid container style={{ marginTop: ".25%" }} justify="center">
            <TextField
              value={this.state.Comment}
              onChange={this.handleUpdate}
              name="Comment"
              onClick={this.handleClear}
              error={this.state.errors.Comment.length > 0 ? true : false}
              helperText={
                this.state.errors.Comment.length > 0 ? "Required Field" : " "
              }
              required
              id="outlined-multiline-static"
              label="Comment"
              multiline
              rows={6}
              style={{ width: "50%" }}
              variant="outlined"
            />
          </Grid>
          <div width="100%" style={{ height: "20px", color: "black" }}></div>

          {this.state.networkStaus && this.showNetworkConnection()}

          {this.state.loading ? (
            <CircularProgress color="primary" />
          ) : (
            <Button
              justify="right"
              onClick={this.handleSubmit}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          )}
        </Grid>
        <Grid justify="center" container>
          {this.state.comments.length > 0 ? (
            <Lister
              deletecomment={(num) => this.deleteComment(num)}
              comments={this.state.comments}
            />
          ) : this.state.loading ? (
            <CircularProgress color="primary" />
          ) : null}
        </Grid>
      </div>
    );
  }
}

export default comment;
