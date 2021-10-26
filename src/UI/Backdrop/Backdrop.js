import React, { Component } from "react";
import classes from "./Backdrop.module.css";

export class Backdrop extends Component {
  constructor(props) {
    super(props);
    this.backdropRef = React.createRef();
  }
  toggleBackdrop = () => {
    if (this.props.show) {
      this.backdropRef.current.classList.add(classes.display);
      setTimeout(() => {
        this.backdropRef.current.classList.add(classes.show);
      }, 1);
    } else {
      this.backdropRef.current.classList.remove(classes.show);
      setTimeout(() => {
        this.backdropRef.current.classList.remove(classes.display);
      }, 200);
    }
  };
  componentDidMount() {
    this.toggleBackdrop();
  }
  componentDidUpdate() {
    this.toggleBackdrop();
  }
  render() {
    return (
      <div
        className={classes.Backdrop}
        ref={this.backdropRef}
        onClick={this.props.clicked}
      ></div>
    );
  }
}

export default Backdrop;
