import React from 'react'
import aboutImg from '../layouts/assets/middle.jpg'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <section id="about-us">
            <div class="mx-auto about-us-container container">
                <h5 className="text-center text-dark">ABOUT US</h5>
                <h2 className="text-center text-dark" style={{ fontSize: "35px", fontFamily: "auto", }}>A best place to enjoy <br /> your life</h2><br />
                <p className="text-muted" style={{ fontSize: "12px" }}>
                    Your connection was interruptedA network change was detected.
                    ERR_NETWORK_CHANGEDYour connection was interruptedA network change was detected.
                    ERR_NETWORK_CHANGEDYour connection was interruptedA network change was detected.
                    ERR_NETWORK_CHANGEDYour connection was interruptedA network change was detected.
                    ERR_NETWORK_CHANGED
                </p>
                <div className="mx-auto about-us-image-container container">
                    <img src={aboutImg} alt="about us" className="mx-auto about-us-image" />
                </div>
            </div >
            <div className="text-center view-more-row">
                <br />  <br /> <br />
                <p style={{ textDecoration: "underline" }}>View more</p>
            </div>
        </section >
    )
}

export default AboutUs
