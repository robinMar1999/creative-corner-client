import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import classes from "./Thumbnails.module.css";

const Thumbnails = (props) => {
  const renderedThumbnails = [];
  for (let design of props.designs) {
    renderedThumbnails.push(
      <Thumbnail
        key={design._id}
        url={design.info[0].url}
        count={design.info.length}
        name={design.info[0].name}
        id={design._id}
      />
    );
  }
  return <div className={classes.Thumbnails}>{renderedThumbnails}</div>;
};

export default Thumbnails;
