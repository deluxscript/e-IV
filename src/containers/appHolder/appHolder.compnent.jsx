import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Aux from '../../hoc/Aux/Aux.component';
import Home from '../../pages/home/home.component';
import NavItems from '../../components/navitems/navitems.component';
import IdCreator from '../../pages/idcreator/idcreator.component';

import classes from "./appHolder.module.css";

class AppHolder extends Component {

    state = {
        brideFamName: '',
        grmFamName: '',
        brideName: '',
        groomName: '',
        date: '',
        time: '',
        location: '',
        desc: '',
        disableBtn: true
    }

    handleChange = (event) => {
        const val = event.target.value;
        const name = event.target.name;

        return this.setState({[name]: val});
    }

    disableAction = () => {
        const brideName = this.state.brideName;
        const brideFamName = this.state.brideFamName;
        const groomFamName = this.state.grmFamName;
        const groomName = this.state.groomName;
        const date = this.state.date;
        const time = this.state.time;
        const location = this.state.location;
        if(!!brideName && !!groomName && !!brideFamName && !!groomFamName && !!date && !!time && !!location) {
            return this.setState({disableBtn: !this.state.disableBtn})
        }
    }

    
    render() {
        const data =this.state;
        return (
            <Router>
                <Aux>
                    <div>
                        <div className="App-header">
                                <div className={classes.h100}>
                                    <Switch>
                                        <Route path="/e-iv/idcreator">
                                            <IdCreator
                                                act = {this.handleChange}
                                                bFn = {data.brideFamName}
                                                bN = {data.brideName}
                                                date = {data.date}
                                                desc = {data.desc}
                                                gFn = {data.grmFamName}
                                                gN = {data.groomName}
                                                loc = {data.location}
                                                time = {data.time}
                                                dis = {this.disableAction}
                                                btnAction = {data.disableBtn}
                                            />
                                        </Route>
                                        <Route path="/e-iv">
                                            <div className="bg"></div>
                                            <div className="sect">
                                                <NavItems />
                                                <Home />
                                            </div>
                                        </Route>
                                    </Switch>
                                </div>
                        </div>
                    </div>
                </Aux>
            </Router>
        );
    }
}

export default AppHolder;