import React from "react";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  if (props.open) {
    const sidebar = document.querySelector("." + classes.Sidebar);
    if (sidebar) {
      sidebar.classList.add(classes.open);
    }
  } else {
    const sidebar = document.querySelector("." + classes.Sidebar);
    if (sidebar) {
      sidebar.classList.remove(classes.open);
    }
  }
  return (
    <div className={classes.Sidebar}>
      <div className={classes.close} onClick={props.clicked}>
        X
      </div>
      <nav className={classes.miniNav}>
        <ul className={classes.miniNavItems}>
          <li className={classes.miniNavItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.miniNavItem}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={classes.miniNavItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
