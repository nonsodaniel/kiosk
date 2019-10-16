import React from 'react'
import image1 from '../layouts/assets/newspaper.jpg'
import image2 from '../layouts/assets/money.png'

const Discover = () => {
    return (
        <section id="discover" className="">
            <div className="row discover-row">
                <div className="col-md-5  discover-img-1">
                    <h6 className="text-center title-1" style={{
                        fontSize: "10px"
                    }}>DISCOVER OUR ROOMS</h6>
                    <h4 className="text-center title-2" style={{
                        fontSize: "30px", fontFamily: "auto"
                    }}>Luxurios Interior</h4><br /><br />

                    <div className="container">
                        <ul className="row discover-ul-lists">
                            <li className="col-md-5 discover-lists-img discover-lists "></li>
                            <li className="col-md-6 discover-lists bg-light">
                                <br />
                                <h6 className="text-dark">Classic Room</h6>
                                <h6 className="text-dark" style={{ fontSize: "14px", }}>Starting from <b>#3000</b></h6>
                            </li>
                            <li className="col-md-5 discover-lists-img discover-lists"></li>
                            <li className="col-md-6 discover-lists">
                                <br />
                                <h6 className="text-dark">Classic Room</h6>
                                <h6 className="text-dark" style={{ fontSize: "14px", }}>Starting from <b>#3000</b></h6>
                            </li>
                            <li className="col-md-5 discover-lists-img discover-lists"></li>
                            <li className="col-md-6 discover-lists">
                                <br />
                                <h6 className="text-dark">Classic Room</h6>
                                <h6 className="text-dark" style={{ fontSize: "14px", }}>Starting from <b>#3000</b></h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7 discover-img-2">

                </div>
            </div>
        </section>
    )
}

export default Discover
