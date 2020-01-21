import React, { Component } from "react";

export default class ProductB extends Component {
  render() {
    return (
      <div className="container">
        <div className="row rows-cols-3">
          <img src="..." className="img-thumbnail" alt="..." />
          <div className="card-body">
            <p className="card-text">WOMEN</p>
          </div>

          <img src="..." className="img-thumbnail" alt="..." />
          <div className="card-body">
            <p className="card-text">MEN</p>
          </div>

          <img src="..." className="img-thumbnail" alt="..." />
          <div className="card-body">
            <p className="card-text">KIDS</p>
          </div>
        </div>
      </div>
    );
  }
}
