import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, img, price, facilities} = service;
    const navigate = useNavigate();
    const navigateCheckOut = (name) =>{
        navigate(`/checkout/${name}`)
    }
    return (
        <div>
            <div className='service'>
                <img className='w-100 service-image mx-auto rounded' src={img} alt="" />
                <h3 className='text-center text-primary fs-3 mt-3'>{name}</h3>
                <h5 className='text-center fs-4'>{price}</h5>
                <hr />
                <h6>Facilities:</h6>
                <ul>
                    <li>{facilities?.face1}</li>
                    <li>{facilities?.face2}</li>
                    <li>{facilities?.face3}</li>
                    <li>{facilities?.face4}</li>
                    <li>{facilities?.face5}</li>
                    <li>{facilities?.face6}</li>
                    {
                        facilities.face7 &&
                        <li>{facilities?.face7}</li>
                        }
                </ul>

                <button onClick={() =>navigateCheckOut(name)} className='w-100 book-now-btn'>Book Now</button>  
            </div>
        </div>
    );
};

export default Service;