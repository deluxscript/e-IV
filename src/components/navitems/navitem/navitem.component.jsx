import React from "react";
import {
    Link
  } from "react-router-dom";

import classes from "./navitem.module.css";

const NavItem = (props) => (
    <li className={classes.NavItem}>
        <Link to ={props.link} className={props.active ? classes.active : null}>{props.children}</Link>
    </li>
);

export default NavItem;