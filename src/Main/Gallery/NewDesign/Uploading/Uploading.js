import React, { Component } from "react";
import classes from "./Uploading.module.css";

export class Uploading extends Component {
  constructor(props) {
    super(props);
    this.x = null;
  }
  state = {
    textContent: "",
  };
  componentDidMount() {
    const arr = ["", ".", "..", "..."];
    let index = 0;
    this.x = setInterval(() => {
      this.setState({
        textContent: arr[index],
      });
      index = (index + 1) % 4;
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.x);
  }
  render() {
    return (
      <div className={classes.Uploading}>
        <div className={classes.Content}>Uploading</div>
        <div className={classes.Dots}>{this.state.textContent}</div>
      </div>
    );
  }
}

export default Uploading;
