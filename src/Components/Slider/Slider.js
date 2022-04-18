import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/slider-1.jpg'
import slider2 from '../../images/slider/slider-2.jpg'
import slider3 from '../../images/slider/slider-3.jpg'
import './Slider.css';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
      return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <img
                      className="d-block w-100 slider-image"
                      src={slider1}
                      alt="First slide"
                  />
                  <Carousel.Caption>
                      <h2>Welcome to AR Photography</h2>
                      <p>Your each movement, each emotion is nothing but a beautiful picture and we just want to hold on those moments with my cameras and make it a piece of art with  adroit editing</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100 slider-image"
                      src={slider2}
                      alt="Second slide"
                  />
  
                  <Carousel.Caption>
                      <h3>A picture is worth a thousands words</h3>
                      <p>Clearly and beautifully captures your emotions- the joy, the laughter, the tears</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100 slider-image"
                      src={slider3}
                      alt="Third slide"
                  />
  
                  <Carousel.Caption>
                      <h3>Ready to take you beyond your imagination!</h3>
                      <p>
                          Take photos so perfectly that you will feel the same that you had felt in that very special day. 
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
    );
};

export default Slider;