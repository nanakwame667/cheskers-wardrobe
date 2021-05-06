import { React } from 'react';
import './footer.css';
import icon_1 from '../../images/icons8-facebook-f-50.png';
import icon_2 from '../../images/icons8-instagram-old-50.png';
import icon_3 from '../../images/icons8-twitter-50.png';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="col" id="footer-section">
                    <div className="row ">
                        <div className="col icon"><a href="/"><img src={icon_1} alt=""/></a></div>
                        <div className="col icon"><a href="/"><img src={icon_2} alt=""/></a></div>
                        <div className="col icon"><a href="/"><img src={icon_3} alt=""/></a></div>
                    </div>
                    <div className="row second ">
                        <p><a href="/">Blog</a></p>
                        <p><a href="/contact">Contact</a></p>
                        <p><a href="/gallery">Gallery</a></p>
                        <p><a href="/about">About</a></p>
                        <p><a href="/">Terms& Conditions</a></p>
                    </div>
                    <div className="row third ">
                        <p>2021<b>&copy;</b> techup studio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;