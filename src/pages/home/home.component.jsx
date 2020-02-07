import React from "react";
import {
    Link
  } from "react-router-dom";

import classes from "./home.module.css";

import headerImage from "./../../assets/img/wedding-planning.png";

const Home = (props) => (
    <div className={classes.home}>
        <div>
            <h2 className={classes.actionText}>Perfect your wedding <br/>planning process</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            <div className={classes.actions}>
                <div className={classes.getStarted}><Link to = "/idcreator">Get Started</Link></div>
                <div className={classes.how}>How it works</div>
            </div>
        </div>
        <div>
            <img src={headerImage} alt="wedding planner" width="300px" />
        </div>
    </div>
);

export default Home;