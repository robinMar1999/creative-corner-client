import React from "react";
import { Link } from "react-router-dom";
import classes from "./Thumbnail.module.css";

const Thumbnail = (props) => {
  return (
    <div className={classes.Thumbnail}>
      <Link to={`/view/${props.id}`}>
        <img className={classes.Image} src={props.url} alt={props.name} />
        <div className={classes.Description}>
          <i className="fas fa-images"></i> {props.count} Photos
        </div>
      </Link>
    </div>
  );
};

export default Thumbnail;
