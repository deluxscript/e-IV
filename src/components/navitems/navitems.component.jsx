import React from "react";

import classes from "./navitems.module.css";
import NavItem from "./navitem/navitem.component"

const NavItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/e-iv" active>Home</NavItem>
        <NavItem link="#">How it Works</NavItem>
        <NavItem link="/e-iv/idcreator">Get Started</NavItem>
    </ul>
);

export default NavItems;