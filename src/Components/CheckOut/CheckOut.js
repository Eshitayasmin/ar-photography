import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CheckOut.css';

const CheckOut = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    

    
    const navigateWelcomePage = () => {
        toast('Thanks for your booking')
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <div className='form-container'>
            <h2 className='booking-title'>Booking For: <span className='booking-name'>{name}</span></h2>
            <h3 className='fill-up-title'>Fill Up The Form</h3>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" name="name" id="" placeholder='Your Name' required />
                <input class="input" type="email" name="email" id="" placeholder='Your Email' required />
                <input class="input" type="text" name='address' placeholder='Address' required />
                <input class="input" type="number" name="phone" id="" placeholder='Your Phone Number' required />
                <input class="input" type="date" name="Date" id="" placeholder='date' required />
                <Button type='submit' id="button" className="submit-btn" onClick={navigateWelcomePage} >Submit</Button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;