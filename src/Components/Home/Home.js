import { Carousel } from 'bootstrap';
import React from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Speech from '../Speech/Speech';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
           <Services></Services>
           <Speech></Speech>
           <Gallery></Gallery>
           
        </div>
    );
};

export default Home;