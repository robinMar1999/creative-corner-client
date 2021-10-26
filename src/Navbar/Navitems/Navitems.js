import React from "react";
import classes from "./Navitems.module.css";
import { Link } from "react-router-dom";

const Navitems = () => {
  return (
    <nav className={classes.Navbar}>
      <ul className={classes.Navitems}>
        <li className={classes.Navitem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.Navitem}>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className={classes.Navitem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navitems;
