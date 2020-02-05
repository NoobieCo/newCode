import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AfterlogNavbar from "./AfterlogNavbar";

class BeforelogNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPatient: false
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navheader">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/Login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Signup"} className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default BeforelogNavbar;
