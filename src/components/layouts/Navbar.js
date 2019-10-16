import React from "react";
import './assets/style.css'
import { Link } from 'react-router-dom'
import Logo from '../layouts/assets/transcorp-1@2x.png'

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center navbar-title-div container">
        <h6 className="contact-no">Contact us directly  at +2349096548675 +2349096548675 +2349096548675 </h6>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto" style={ulStyle}>
            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link nav-titles home">HOME <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/about-us" className="nav-link nav-titles">ABOUT US <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/rooms" className="nav-link nav-titles">OUR ROOMS <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item logo-link" style={liStyle}>
              <Link to="/" className="nav-link nav-titles">
                <img src={Logo} style={{ width: "130px" }} className="logo" alt="..." />
              </Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="reservation" className="nav-link nav-titles">RESERVATION <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/blogs" className="nav-link nav-titles">BLOGS <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active" style={liStyle}>
              <Link to="/contact" className="nav-link nav-titles">CONTACT <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>

    </React.Fragment>
  );
}

const ulStyle = {
  margin: "0 auto"
}

const liStyle = {
  paddingLeft: "17px"
}

