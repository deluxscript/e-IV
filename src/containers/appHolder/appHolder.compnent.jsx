import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Aux from '../../hoc/Aux/Aux.component';
import Home from '../../pages/home/home.component';
import NavItems from '../../components/navitems/navitems.component';
import Template1 from '../../templates/template 1/template1.component';

class AppHolder extends Component {

    
    render() {
        return (
            <Router>
                <Aux>
                    <div>
                        <div className="App-header">
                                <div>
                                    <Switch>
                                        <Route path="/template1">
                                            <Template1 />
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