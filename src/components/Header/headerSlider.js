import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import female_1 from '../../images/bg-1.jpg';
import male_1 from '../../images/1.jpg';
import './slider.css';

const HeaderSlider = () => {
    return (
        <div>
            <Carousel 
            indicators={false}
            prevIcon={''}
            nextIcon={''}
            fade>
  <Carousel.Item className="banner" interval={8000}>
    <img
    className="d-block w-100"
      src={female_1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item className="banner" interval={8000}>
    <img
    className="d-block w-100"
      src={male_1}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default HeaderSlider;
