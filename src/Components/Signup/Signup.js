import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/login');
    }
    return (
        <div>
            <h1 className='form-title'>Signup</h1>
            <form className='form-container'>
                <input type="email" name="email" id="" placeholder='Your Email'/>
                <input type="password" name="password" id="" placeholder='Password'/>
                <input type="password" name="confirm-password" id="" placeholder='Confirm Password'/>
                <button className='submit-btn'>Signup</button>

                <p><small>Already have an account? <span onClick={handleLogin} className='text-primary btn btn-link text-decoration-none p-0'> Please Login</span></small></p>
            </form>
        </div>
    );
};

export default Signup;