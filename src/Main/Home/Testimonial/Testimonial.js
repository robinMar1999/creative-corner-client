import React from "react";
import classes from "./Testimonial.module.css";

const Testimonial = (props) => {
  return (
    <div className={classes.Testimonial}>
      <div className={classes.content}>{props.children}</div>
      <div className={classes.author}>-{props.author}</div>
    </div>
  );
};

export default Testimonial;
