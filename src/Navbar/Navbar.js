import React, { Component } from "react";
import classes from "./Navbar.module.css";
import Logo from "./Logo/Logo";
import Toggle from "./Toggle/Toggle";
import Backdrop from "../UI/Backdrop/Backdrop";
import Sidebar from "./Sidebar/Sidebar";
import Navitems from "./Navitems/Navitems";

class Navbar extends Component {
  state = {
    show: false,
    open: false,
  };
  toggleHandler = () => {
    this.setState((prevState, currProps) => {
      return {
        show: !prevState.show,
        open: !prevState.open,
      };
    });
  };
  render() {
    return (
      <div className={classes.Navbar}>
        <div className={classes.container}>
          <Logo />
          <Toggle clicked={this.toggleHandler} />
          <Backdrop show={this.state.show} clicked={this.toggleHandler} />
          <Sidebar open={this.state.open} clicked={this.toggleHandler} />
          <Navitems />
        </div>
      </div>
    );
  }
}

export default Navbar;
