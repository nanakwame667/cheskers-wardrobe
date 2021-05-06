import React from 'react'
import './contact.css';
import fab1 from '../../images/fab-1.jpg';
import fab3 from '../../images/fab-3.jpg';
import fab4 from '../../images/fab-4.jpg';
const ContactInfo = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="col contact-details">
                    <div className="row">
                        <p>Follow <b style={{color:'#1c55ff'}}> @Cheskers Wardrobe</b> on Instagram</p>
                    </div>
                    <div className="row ">
                        <div className="col col-lg-4 image1"><img src={fab1} alt=""/></div>
                        <div className="col col-lg-4 image1"><img src={fab3} alt=""/></div>
                        <div className="col col-lg-4 image1"><img src={fab4} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
