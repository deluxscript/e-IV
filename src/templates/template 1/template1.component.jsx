import React from 'react';

import classes from './template1.module.css';

const Template1 = (props) => (
    <div className={classes.template1}>
        <div className={classes.content}>
            <div className={classes.section1}>
                <p>Julia & Stephen Jepherson</p>
                <p>And</p>
                <p>Iya & Baba Ologi</p>
                <p>Invite you to share in the joy of the marriage of their children</p>
            </div>
            <div className={classes.section2}>
                <p className={classes.name}>Erin Jepherson</p>
                <p>And</p>
                <p className={classes.name}>Olage Ologi</p>
            </div>
            <div className={classes.section3}>
                <p className={classes.date}>Saturday, June 8th, 2020</p>
                <p className={classes.time}>At 7'0 clock in the evening</p>
                <div className={classes.location}>
                    <p>Signature Hotel</p>
                    <p>Silicon Vally, CA 52341</p>
                </div>
                <p className={classes.moreInfo}>Reception to follow after</p>
            </div>
        </div>
    </div>
);

export default Template1;