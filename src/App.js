import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Carousel from './components/layouts/Carousel'
import Footer from "./components/layouts/Footer";
import AboutUs from "./components/layouts/AboutUs";
import Discover from "./components/layouts/Discover";
import TestimonialBlog from "./components/layouts/TestimonialBlog";
import Contacts from "./components/layouts/Contacts";


class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app wrapper" id="wrapper" >
          <Navbar />
          <Carousel />
          <AboutUs />
          <Discover />
          <TestimonialBlog />
          <Contacts />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
