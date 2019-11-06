import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";


class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app wrapper" id="wrapper" >
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
