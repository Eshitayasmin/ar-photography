import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSignup = () =>{
        navigate('/signup');
    }
    return (
        <div>
            <h1 className='form-title'>Login</h1>
            <form className='form-container'>
                <input type="email" name="email" id="" placeholder='Your Email'/>
                <input type="password" name="password" id="" placeholder='Password'/>
                <button className='submit-btn'>Login</button>
                <p><small>New to AR PHOTOGRAPY? <span onClick={handleSignup} className='text-primary btn btn-link text-decoration-none p-0'>Please Signup</span></small></p>
            </form>
        </div>
    );
};

export default Login;