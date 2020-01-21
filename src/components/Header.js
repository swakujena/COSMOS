import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link header" href=" ">
            <i className="fas fa-mobile" /> Download App |
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link header" href=" ">
            Help/Support |
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link header" href=" ">
            Sign In |
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link header" href=" ">
            SignUp
          </a>
        </li>
      </ul>
    );
  }
}
