import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Reg from "./Reg";
import Dashboard from "./Dashboard";
import Dropdown from "react-bootstrap/Dropdown";
import NewPatient from "./NewPatient";
import EditPatient from "./EditPatient";
import Patientlist from "./Patientlist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AfterlogNavbar from "./AfterlogNavbar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPatient: false
    };
  }
  componentWillMount = () => {
    console.log(this.props.location);
  };
  render() {
    return (
      <Router>
        <div className="container">
          {this.state.isPatient ? (
            <div>
              <nav className="navbar navbar-expand-lg navheader">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto" />
                  <li className="nav-item">
                    <Link to={"/NewPatient"} className="nav-link">
                      New Patient
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Patientlist"} className="nav-link">
                      Patient List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Login"} className="nav-link">
                      Log out
                    </Link>
                  </li>
                </div>
              </nav>{" "}
            </div>
          ) : (
            <div>
              <nav className="navbar navbar-expand-lg navheader">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto" />
                  <li className="nav-item">
                    <Link to={"/Login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/Signup"} className="nav-link">
                      SignUp
                    </Link>
                  </li>
                </div>
              </nav>{" "}
            </div>
          )}
          <br />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <Route path="/Signup" component={Reg} />
            <Route path="/CreatePatient" component={NewPatient} />
            <Route path="/NewPatient" component={NewPatient} />
            <Route path="/EditPatient/" component={EditPatient} />
            <Route path="/Patientlist" component={Patientlist} />
          </Switch>
          <Switch>
            <Route path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Layout;
