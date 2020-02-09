import React, { Component } from 'react';

import classes from './template1.module.css';
import ring from "./../../assets/img/rings.png";

class Template1 extends Component {

    render() {
        return(
            <div className={classes.template1}>
                <div className={classes.withBg}>
                    <div className={classes.mainContent}>
                        <div className={classes.content}>
                            <img src={ring} alt="freepick" className={classes.topImg} />
                            <div className={classes.section1}>
                                <p className={classes.familyname}>{this.props.brideFamilyName}</p>
                                <p>and</p>
                                <p className={classes.familyname}>{this.props.groomFamilyName}</p>
                                <p className={classes.inviteText}>Invite you to share in the joy of the marriage of their children</p>
                            </div>
                            <div className={classes.section2}>
                                <p className={classes.name}>{this.props.brideName}</p>
                                <p className={classes.cojoin}><span>and</span></p>
                                <p className={classes.name}>{this.props.groomName}</p>
                            </div>
                            <div className={classes.section3}>
                                <p className={classes.date}>{this.props.date}</p>
                                <p className={classes.time}>{this.props.time}</p>
                                <div className={classes.location}>
                                    <p>{this.props.location}</p>
                                </div>
                                <p className={classes.moreInfo}>{this.props.description}</p>
                            </div>
                            <img src={ring} alt="freepick" className={classes.bottomImg} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Template1;