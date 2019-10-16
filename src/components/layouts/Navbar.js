import React from "react";
import './assets/style.css'
import { Link } from 'react-router-dom'
import Logo from '../layouts/assets/transcorp-1@2x.png'

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center navbar-title-div container">
        <h6>Contact us directly  at +2349096548675 +2349096548675 +2349096548675 </h6>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ml-auto" style={ulStyle}>
            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link">ABOUT US <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link">CONTACT US <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link">BLOG <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link">
                <img src={Logo} style={{ width: "130px" }} />
              </Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link">SIGN IN <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link">GET STARTED <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active" style={liStyle}>
              <Link to="/" className="nav-link">GET STARTED <span className="sr-only">(current)</span></Link>
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

