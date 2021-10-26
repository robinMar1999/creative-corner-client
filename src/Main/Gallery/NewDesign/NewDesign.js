import React, { useRef } from "react";
import classes from "./NewDesign.module.css";
import Uploading from "./Uploading/Uploading";

const NewDesign = (props) => {
  const fileInputRef = useRef(null);
  return (
    <div className={classes.NewDesign}>
      <input type="file" multiple onChange={props.changed} ref={fileInputRef} />
      <button
        className={classes.Button}
        onClick={
          props.selected ? (event) => props.clicked(event, fileInputRef) : null
        }
        disabled={!props.selected}
      >
        Add Design
      </button>
      {props.uploading ? <Uploading /> : null}
    </div>
  );
};

export default NewDesign;
