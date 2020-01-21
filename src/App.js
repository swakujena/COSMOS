import React, { Component } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ProductA from "./components/ProductA";
import ProductB from "./components/ProductB";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Menu />
        <hr />
        <ProductA />
        <hr />
        <ProductB />
      </div>
    );
  }
}

export default App;
