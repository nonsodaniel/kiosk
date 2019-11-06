import React from "react";
import './assets/css/style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <React.Fragment>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link to="/" className="navbar-brand">
            <div className="logo">

            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="list-container">

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Shopper</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link"><button className="btn  btn-logIn border text-dark bg-white">LOG IN</button></Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link"><button className="btn text-white btn-signUp">SIGN UP</button></Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </header>

      <section className="login">
        <div className="container login-container">
          <h2 className="text-center login-text">Log In</h2>
          <form className="form mx-auto">
            <input type="text" className="form-control mb-2 mr-sm-2 col-md-7 shadow-none " placeholder="Username" /><br />
            <input type="password" className="form-control mb-2 mr-sm-2 col-md-7 shadow-none " placeholder="Password" /><br />
            <button className="col-md-7 btn btn-primary btn-login">Log In</button><br />
          </form>
          <h6 className="text-center ">Login with</h6>
          <div className="d-flex justify-content-center">
            <button className="btn text-white btn-facebook">facebook</button>
            <button className="btn text-white btn-google">Google</button>
          </div><br />
          <h6 className="text-center forgot-pwd-text">Forgot password?</h6>
          <div className="d-flex justify-content-center not-a-member">
            <div className="font-size-small">Not a member yet?</div>
            <div>Sign Up</div>
          </div>
        </div>
      </section>


    </React.Fragment>
  );
}



