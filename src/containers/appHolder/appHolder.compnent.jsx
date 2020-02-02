import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Aux from '../../hoc/Aux/Aux.component';
import Home from '../../pages/home/home.component';
import NavItems from '../../components/navitems/navitems.component';

class AppHolder extends Component {

    
    render() {
        return (
            <Router>
                <Aux>
                    <div>
                        <div className="App-header">
                            <div className="bg"></div>
                            <div className="sect">
                                <NavItems />
                                <div>
                                    <Switch>
                                        <Route path="/">
                                            <Home />
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </Aux>
            </Router>
        );
    }
}

export default AppHolder;