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
                      src={slider2}
                      alt="First slide"
                  />
                  <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100 slider-image"
                      src={slider3}
                      alt="Second slide"
                  />
  
                  <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100 slider-image"
                      src={slider1}
                      alt="Third slide"
                  />
  
                  <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
    );
};

export default Slider;