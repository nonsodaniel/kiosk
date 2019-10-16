import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex bd-highlight mb-3 flex-column carousel-div text-white">
                    <br /><br /><br />
                    <div className="container header-text">
                        <h5 className="text-center text-white">WELCOME TO</h5>
                        <h1 className="text-center text-white">Transcorp Hotel</h1>
                        <h6 className="text-center text-white">A place to experience and enjoy life</h6>
                        <p className="text-center text-white">Some icons</p>
                    </div>
                    <div className="container mx-auto background-carousel shadow bg-white rounded">
                        <div className="row">
                            <div className="col-md-3 carousel-tabs">
                                <h6 className="text-dark text-center">CHECK-IN</h6>
                                <h3 className="text-dark text-center">24 <span className="carousel-tabs-span">/ June</span></h3>
                            </div>
                            <div className="col-md-3 carousel-tabs">
                                <h6 className="text-dark text-center">CHECK-OUT</h6>
                                <h3 className="text-dark text-center">29 <span className="carousel-tabs-span">/ June</span></h3>
                            </div>
                            <div className="col-md-3 carousel-tabs">
                                <h6 className="text-dark text-center">GUESTS</h6>
                                <h3 className="text-dark text-center">03 <span className="carousel-tabs-span">/ June</span></h3>
                            </div>
                            <div className="col-md-3 carousel-tabs-last">
                                <h6 className=" text-center text-white promotional-code">Have a promotional code?</h6>
                                <button className="btn btn-primary check-avail">Check Availability</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
