import React from 'react';
import './gallery.css';
import gallery_1 from '../../images/bg-1.png';
import gallery_2 from '../../images/bg-2.png';
import gallery_3 from '../../images/bg-3.png';
const Gallery = () => {
    return (
        <div className="gallery">
        <div className="container">
            <div className="row" id="section">
                <div className="col col-lg-6 image ">
                    <img src={gallery_1} alt="gallery-1"/>
                </div>
                <div className="col col-lg-6 details mt-5">
                    <h2>Red Grace Cape Pallazo</h2>
                    <p className="my-5">
                    Rahyma Hope collection African print cape jumpsuit 2 side and back pockets 2inch waistband with pleats A-line palazzo  Exposed metal back zipper 100% cotton wax print with no stretch 
                    </p>
                    <p>Price {'\u20B5'}<b>150.00</b></p>
                    <div className="bt">
                    <a href="/">Purchase</a>
                    </div>
                </div>
            </div>
            <div className="row" id="section">
                <div className="col col-lg-6 details mt-5">
                    <h2>Red Grace Cape Pallazo</h2>
                    <p className="my-5">
                    Rahyma Hope collection African print cape jumpsuit 2 side and back pockets 2inch waistband with pleats A-line palazzo  Exposed metal back zipper 100% cotton wax print with no stretch 
                    </p>
                    <p>Price {'\u20B5'}<b>150.00</b></p>
                    <div className="bt">
                    <a href="/">Purchase</a>
                    </div>
                </div>
                <div className="col col-lg-6 image ">
                    <img src={gallery_2} alt="gallery-1"/>
                </div>
            </div>
            <div className="row" id="section">
                <div className="col col-lg-6 image ">
                    <img src={gallery_3} alt="gallery-1"/>
                </div>
                <div className="col col-lg-6 details mt-5">
                    <h2>Red Grace Cape Pallazo</h2>
                    <p className="my-5">
                    Rahyma Hope collection African print cape jumpsuit 2 side and back pockets 2inch waistband with pleats A-line palazzo  Exposed metal back zipper 100% cotton wax print with no stretch 
                    </p>
                    <p>Price {'\u20B5'}<b>150.00</b></p>
                    <div className="bt">
                    <a href="/">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Gallery;
