import React from 'react'

export default function Socials() {
    return (
        <section className="social-section">
            <div className="container-fluid">

                <div className="row d-flex align-items-center text-center text-center">
                    <div className="col-md-3 social-column d-flex justify-content-center align-items-center">
                        <i className="social-fa fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div className="col-md-3 social-column d-flex justify-content-center align-items-center">
                        <i className="social-fa fa fa-facebook-f"></i>
                    </div>

                    <div className="col-md-3 social-column d-flex justify-content-center align-items-center">
                        <i className="social-fa fa fa-twitter"></i>
                    </div>

                    <div className="col-md-3 social-column d-flex justify-content-center align-items-center">
                        <i className="social-fa fa fa-instagram"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
