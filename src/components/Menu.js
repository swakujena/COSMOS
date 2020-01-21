import React, { Component } from "react";
import "../App.css";

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand site-name" href=" ">
          COSMOS
          <i className="fas fa-space-shuttle" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link menu" href=" ">
                WOMEN <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link menu" href=" ">
                MEN <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link menu" href=" ">
                KIDS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link menu" href=" ">
                SPORTS <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link menu" href=" ">
                ACCESSORIES <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link menu" href=" ">
                HOME & LIVING <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input
              className="search-engine form-control  mr-sm-1"
              type="search"
              placeholder="Be You: Search Here"
            />
            <button
              className="btn search btn-outline-light my-2 my-sm-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href=" ">
              <i className="far fa-heart" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">
              <i className="fas fa-shopping-bag" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
