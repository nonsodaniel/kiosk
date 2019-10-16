import React from 'react'
import aboutImg from '../layouts/assets/about.png'

const AboutUs = () => {
    return (
        <section id="about-us">
            <div class="mx-auto about-us-container container">
                <h5 className="text-center text-dark about-us-text">ABOUT US</h5> <br />
                <h2 className="text-center text-dark best-place">A best place to enjoy <br /> your life</h2><br />
                <p className="text-muted text-center" style={{ fontSize: "12px" }}>
                    Transcorp Hilton Hotel is situated in the heart of Nigeria’s Federal Capital Territory,
                    a 40-minute drive from the Nnamdi Azikiwe International Airport in Abuja.
                    It is a 670–room, 5-star hotel that provides
                    luxury accommodation, exotic cuisine,
                     and fully equipped meeting rooms and to business travellers and tourists from all over the world
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
