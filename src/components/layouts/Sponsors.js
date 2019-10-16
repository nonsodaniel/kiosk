import React from 'react'
import Image1 from './assets/bcomp.png'
import Image2 from './assets/dangote.png'
import Image3 from './assets/aiico.jpg'
import Image4 from './assets/lotus.png'
import Image5 from './assets/first.png'
import Image6 from './assets/gt.png'
import Image7 from './assets/nmrc.jpg'


export default function Sponsors() {
    return (
        <section>
            <div className="container">
                <div className="d-flex justify-content-center flex-column">
                    <div className="justify-content-center vertical-align-center text-center">
                        <h4 className="rent-work">
                            Partners</h4><br />
                    </div>
                    <div className="justify-content-center vertical-align-center text-center font-weight-bold" style={{ transform: "translateY(-1rem)" }}>
                        Our ecosystem is powered by trusted corporate partners
                </div>
                </div>
                <div className="row justify-content-center align-item-center" style={{ marginTop: "21px" }}>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img1"><img src={Image1} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img2"><img src={Image2} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img3"><img src={Image3} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img4"><img src={Image4} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img5"><img src={Image5} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img6"><img src={Image6} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img7"><img src={Image7} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img8"><img src={Image2} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img9"><img src={Image5} className="sponsors-img" alt="Some stuff" /></div>
                    <div className="col-2 col-md-2 sponsors-column d-flex justfify-content-center align-items-center sponsors-img1"><img src={Image1} className="sponsors-img" alt="Some stuff" /></div>
                </div>
            </div>
        </section>

    )
}
