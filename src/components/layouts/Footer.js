import React from 'react'
import { Link } from 'react-router-dom'
import './assets/style.css'

export default function Footer() {
    return (
        <section className="bg-dark">
            <footer class="container text-white" >
                <div class="row footer-row-style" style={{ padding: "10vh 20vh" }}>
                    <div class="col-6 col-md text-white">
                        <h6>Features</h6>
                        <ul class="list-unstyled text-small text-white">
                            <li><Link to="swipe.com" class="footer-text">Homepage</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Get Started</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Sign In</Link></li>
                            <li><Link to="swipe.com" class="footer-text">How it Works</Link></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h6>Resources</h6>
                        <ul class="list-unstyled text-small">
                            <li><Link to="swipe.com" class="footer-text">FAQs</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Security</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Private Policy</Link></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h6>About</h6>
                        <ul class="list-unstyled text-small">
                            <li><Link to="swipe.com" class="footer-text">Blog</Link></li>
                            <li><Link to="swipe.com" class="footer-text">About us</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Contact us</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Contact us</Link></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md">
                        <h6>Sign In to our newsletter</h6>
                        <ul class="list-unstyled text-small">
                            <li><Link to="swipe.com" class="footer-text">Blog</Link></li>
                            <li><Link to="swipe.com" class="footer-text">About us</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Contact us</Link></li>
                        </ul>
                    </div>
                    <br />
                    <div className="container footer-hr"></div>
                    <div className="d-flex justify-content-end">
                        <i className="social-fa fa fa-linkedin" aria-hidden="true"></i>
                        <i className="social-fa fa fa-facebook" aria-hidden="true"></i>
                        <i className="social-fa fa fa-twitter" aria-hidden="true"></i>
                        <i className="social-fa fa fa-youtube" aria-hidden="true"></i>
                    </div>
                </div>
            </footer>
        </section >

    )
}
