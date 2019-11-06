import React from "react";
import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <React.Fragment>

      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <Link to="/" class="navbar-brand">One Kiosk</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="list-container">

              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link">About Us</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link">Shopper</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link">Contact Us</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link"><button className="btn  btn-logIn border text-dark bg-white">LOG IN</button></Link>
                </li>
                <li class="nav-item">
                  <Link to="/" class="nav-link"><button className="btn text-white btn-signUp">SIGN UP</button></Link>
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
            <input type="text" class="form-control mb-2 mr-sm-2 col-md-7 " placeholder="Username" /><br />
            <input type="password" class="form-control mb-2 mr-sm-2 col-md-7 " placeholder="Password" /><br />
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



