import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import Reg from "./Reg";
import Dashboard from "./Dashboard";
import NewPatient from "./NewPatient";
import EditPatient from "./EditPatient";
import Patientlist from "./Patientlist";

import "./App.css";

import BeforelogNavbar from "./BeforelogNavbar";
import AfterlogNavbar from "./AfterlogNavbar";
import { render } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isPatient: false
    };
  }

  onStateChange = newState => {
    this.setState({
      isPatient: newState
    });
  };
  render() {
    return (
      <Router>
        {this.state.isPatient ? <AfterlogNavbar /> : <BeforelogNavbar />}
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login
                {...props}
                isPatient={this.state.isPatient}
                changeState={this.onStateChange}
              />
            )}
          />
          <Route
            exact
            path="/Login"
            render={props => (
              <Login
                {...props}
                isPatient={this.state.isPatient}
                changeState={this.onStateChange}
              />
            )}
          />
          <Route path="/Signup" component={Reg} />
          <Route path="/CreatePatient" component={NewPatient} />
          <Route path="/NewPatient" component={NewPatient} />
          <Route path="/EditPatient/" component={EditPatient} />
          <Route path="/Patientlist" component={Patientlist} />
        </Switch>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
