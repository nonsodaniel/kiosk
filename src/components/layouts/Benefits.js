import React from 'react'
import './assets/style.css'

export default function Benefits() {
    return (
        <section style={{ marginTop: "40px" }}>
            <div className="d-flex justify-content-center flex-column">
                <div className="justify-content-center vertical-align-center text-center">
                    <h4 className="rent-work">More benefits for FirstHomes users</h4><br />
                </div>
            </div>

            <div className="row no-gutters">
                <div className="col-md-6 col-sm-6 col-6 benefit-pic1" style={picStyle}>

                </div>
                <div className="col-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center  " style={picStyle}>
                    <div className="text-container d-flex justify-content-center text-center flex-column">
                        <h5 className="font-weight-bolder benefit-move-property" style={titleStyle}> Move from one property to another</h5>
                        <div style={tranformStyle}>
                            Work transfers you to another city? Not to worry, just <br />
                            pack your home contents,  personal effects plus equity <br />
                            and settle into a similar First Homes apartment.
                              </div>
                    </div>
                </div>
            </div>



            <div className="row no-gutters">
                <div className="col-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center  " style={picStyle}>
                    <div className="text-container d-flex justify-content-center text-center flex-column">
                        <h5 className="font-weight-bolder benefit-move-property" style={titleStyle}> Move from one property to another</h5>
                        <div style={tranformStyle}>
                            Work transfers you to another city? Not to worry, just <br />
                            pack your home contents,  personal effects plus equity <br />
                            and settle into a similar First Homes apartment.
                              </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-6 benefit-pic2" style={picStyle}>

                </div>
            </div>

            <div className="row no-gutters">
                <div className="col-md-6 col-sm-6 col-6 benefit-pic3" style={picStyle}>

                </div>
                <div className="col-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center  " style={picStyle}>
                    <div className="text-container d-flex justify-content-center text-center flex-column">
                        <h5 className="font-weight-bolder benefit-move-property" style={titleStyle}> Move from one property to another</h5>
                        <div style={tranformStyle}>
                            Work transfers you to another city? Not to worry, just <br />
                            pack your home contents,  personal effects plus equity <br />
                            and settle into a similar First Homes apartment.
                              </div>
                    </div>
                </div>
            </div>



            <div className="row no-gutters">
                <div className="col-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center  " style={picStyle}>
                    <div className="text-container d-flex justify-content-center text-center flex-column">
                        <h5 className="font-weight-bolder benefit-move-property" style={titleStyle}> Move from one property to another</h5>
                        <div style={tranformStyle}>
                            Work transfers you to another city? Not to worry, just <br />
                            pack your home contents,  personal effects plus equity <br />
                            and settle into a similar First Homes apartment.
                              </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-6 benefit-pic4" style={picStyle}>

                </div>
            </div>

            <div className="row no-gutters">
                <div className="col-6 col-sm-6 col-md-6 d-flex justify-content-center align-items-center  " style={picStyle}>
                    <div className="text-container d-flex justify-content-center text-center flex-column">
                        <h5 className="font-weight-bolder benefit-move-property" style={titleStyle}> Move from one property to another</h5>
                        <div style={tranformStyle}>
                            Work transfers you to another city? Not to worry, just <br />
                            pack your home contents,  personal effects plus equity <br />
                            and settle into a similar First Homes apartment.
                              </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6 col-6 benefit-pic5" style={picStyle}>

                </div>
            </div>
        </section>
    )
}

const tranformStyle = { transform: "translateY(23px)" }

const titleStyle = { marginTop: "-24vh" }

const picStyle = { height: "auto" }
