import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
   
    return (
        <div id="services" className='mt-5'>
            <h1 className='services-title text-primary text-center mb-2'>Available Services</h1>
           <div className='services'>
               {
                   services.map(service => <Service 
                    key={service.id}
                    service={service}></Service>)
               }
             
         </div> 
        </div>
               
       
    );
};

export default Services;