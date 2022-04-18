import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
   
    return (
        <div id="services" className='mt-5'>
            <h1 className='services-title text-primary text-center mb-2'>Available Services: {services.length}</h1>
           <div className='services'>
               {
                   services.map(service => <Service 
                    key={service.id}
                    service={service}></Service>)
               }
             {/* <div className='service'>
                <img className='w-100 service-image mx-auto rounded' src="https://ventsmagazine.com/wp-content/uploads/2019/12/gvQ9NhQP8wbbM32jXy4V3j.jpg" alt="" />
                <h3 className='text-center text-primary fs-3'>Photography</h3>
                <h5 className='text-center fs-4'>TK.20,000/=</h5>
                <hr />
                <h6>Facilities:</h6>
                <ul>
                    <li>Event duration 5 hours</li>
                    <li>Unlimited Pictures</li>
                    <li>Specially 150 copies edited photos</li>
                    <li>Print: 20L (20"x30") Matte Print: 1 copy</li>
                    <li>Print: 5L (5"x7.5") Matte Prints: 125 copies</li>
                    <li>All soft copy of photos will be delivered in AR Photography's Signature Pen drive</li>
                </ul>

                <button onClick={navigateCheckOut} className='w-100 book-now-btn'>Book Now</button>  
            </div>
            <div className='service'>
                <img className='w-100 service-image mx-auto rounded' src="https://www.indiewire.com/wp-content/uploads/2018/02/tri-12139r.jpg?w=780" alt="" />
                <h3 className='text-center text-primary fs-3'>Cinematography</h3>
                <h5 className='text-center fs-4'>TK.35,000/=</h5>
                <hr />
                <h6>Facilities:</h6>
                <ul>
                    <li>Event duration 7 hours</li>
                    <li>3 Camera Units</li>
                    <li>Lighting setup</li>
                    <li>Video Quality: 1080P (1920×1080)</li>
                    <li>Conceptual Cinematography</li>
                    <li>2-3 minutes Promo with the best moments of the event</li>
                    <li>30 minutes + edited video from entire event</li>
                </ul>

                <button onClick={navigateCheckOut} className='w-100 book-now-btn'>Book Now</button>  
            </div>
            <div className='service'>
                <img className='w-100 service-image mx-auto rounded' src="https://images.squarespace-cdn.com/content/v1/5fde0871cb96363ef0b6b786/1609688583073-3H8CWOX13GZLD1YXH86R/shoot-me-now-corporate-photography-1.jpg" alt="" />
                <h3 className='text-center text-primary fs-3'>Corporate Photography</h3>
                <h5 className='text-center fs-4'>Per hour TK.5,000/=</h5>
                <hr />
                <h6>Facilities:</h6>
                <ul>
                    <li>Discreet and unobstructive professional photography</li>
                    <li>All images professionally captured</li>
                    <li>Use only professional cameras</li>
                    <li>Edited images provided within 24 hours</li>
                    <li>Images uploaded to our unique online downloadable gallery</li>
                    <li>Copyright of the images</li>
                </ul>

                <button onClick={navigateCheckOut} className='w-100 book-now-btn'>Book Now</button>  
            </div> */}
         </div> 
        </div>
               
       
    );
};

export default Services;