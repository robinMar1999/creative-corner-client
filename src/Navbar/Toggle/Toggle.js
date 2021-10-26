import React from "react";
import classes from "./Toggle.module.css";

function Toggle(props) {
  return (
    <div className={classes.ToggleButton} onClick={props.clicked}>
      <span className={classes.toggleBar}></span>
      <span className={classes.toggleBar}></span>
      <span className={classes.toggleBar}></span>
    </div>
  );
}

export default Toggle;
