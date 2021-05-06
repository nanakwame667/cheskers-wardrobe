import React from 'react'
import AboutId from '../components/About/about';
import ContactInfo from '../components/Contact/contact';
import Gallery from '../components/Gallery/gallery';
const Home = () => {
    return (
        <div>
            <Gallery/>
            <AboutId/>
            <ContactInfo/>
        </div>
    )
}

export default Home;