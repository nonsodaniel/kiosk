import React from 'react'
import Img from './assets/testimg.png'

const TestimonialBlog = () => {
    return (
        <section id="testimonialBlog" className="bg-light">
            <br />
            <br />
            <div className="container testimonial tb-container  bg-white">
                <br /><br />
                <h6 className="text-center tb-title-1">TESTIMONIALS</h6>
                <h6 className="text-center tb-title-2">What guests say</h6>
                <p className="tb-content text-center">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Fusce commodo urna id neque finibus,
                     ac sollicitudin arcu<br /> tempus. In hac habitasse platea dictumst”
                </p>
                <img src={Img} alt="Testimonials" className="rounded-circle mx-auto d-flex test-img justify-content-center" />
                <div>

                </div>
            </div>

            <div className="container blog">
                <h3 className="text-center blog-title">Latest from our Blogs</h3>
                <div className="container">

                    <div className="row">

                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top"
                                    alt="Blogger"
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dca440afa%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dca440afa%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                                <div className="card-body">
                                    <h6 className="blog-date">April 10th, 2018</h6>
                                    <p className="card-text">
                                        Five reasons to  stay at the beautiful Transcorp Hotel
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm">Continue</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top"
                                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                    alt="Blogger"
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dca440afb%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dca440afb%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    data-holder-render />
                                <div className="card-body">
                                    <h6>April 10th, 2018</h6>
                                    <p className="card-text">Five reasons to  stay at the beautiful Transcorp Hotel</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm">Continue</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top"
                                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                    alt="Blogger"
                                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dca440afd%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dca440afd%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                    data-holder-render />
                                <div className="card-body">
                                    <h6>April 10th, 2018</h6>
                                    <p className="card-text">Five reasons to  stay at the beautiful Transcorp Hotel</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm">Continue</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialBlog
