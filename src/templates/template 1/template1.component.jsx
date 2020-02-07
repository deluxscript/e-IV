import React from 'react';

import classes from './template1.module.css';

const Template1 = (props) => (
    <div className={classes.template1}>
        <div className={classes.content}>
            <div className={classes.section1}>
                <p>{props.brideFamilyName}</p>
                <p>And</p>
                <p>{props.groomFamilyName}</p>
                <p>Invite you to share in the joy of the marriage of their children</p>
            </div>
            <div className={classes.section2}>
                <p className={classes.name}>{props.brideName}</p>
                <p>And</p>
                <p className={classes.name}>{props.groomName}</p>
            </div>
            <div className={classes.section3}>
                <p className={classes.date}>{props.date}</p>
                <p className={classes.time}>{props.time}</p>
                <div className={classes.location}>
                    <p>{props.location}</p>
                </div>
                <p className={classes.moreInfo}>{props.description}</p>
            </div>
        </div>
    </div>
);

export default Template1;