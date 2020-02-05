import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class AfterlogNavbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navheader">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
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
          </ul>
        </div>
      </nav>
    );
  }
}
export default AfterlogNavbar;
