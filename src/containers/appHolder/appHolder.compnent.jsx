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
        desc: ''
    }

    handleChange = (event) => {
        const val = event.target.value;
        const name = event.target.name;

        return this.setState({[name]: val});
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
                                        <Route path="/idcreator">
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
                                            />
                                        </Route>
                                        <Route path="/">
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