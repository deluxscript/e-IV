import React from "react";

import classes from "./navitems.module.css";
import NavItem from "./navitem/navitem.component"

const NavItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active>Home</NavItem>
        <NavItem link="/how-it-works">How it Works</NavItem>
        <NavItem link="/about">Get Started</NavItem>
    </ul>
);

export default NavItems;