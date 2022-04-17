import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);

    }

    if(user){
        navigate('/home');
    }

    const handleSignup = (event) => {
        event.preventDefault();
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password);
        }
        else{
            setErrors("two password didn't match")
        }
        
    }


    const handleLogin = () => {
        navigate('/login');
    }
    return (
        <div>
            <h1 className='form-title'>Signup</h1>
            <form onSubmit={handleSignup} className='form-container'>
                <input onBlur={handleEmailBlur} type="email" name="email" id="email-field" placeholder='Your Email' />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' />

                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Confirm Password' />
                {errors && <p className='error-message'>{errors}</p>}

                <button className='submit-btn'>Signup</button>

                <p><small>Already have an account? <span onClick={handleLogin} className='text-primary btn btn-link text-decoration-none p-0'> Please Login</span></small></p>
            </form>
        </div>
    );
};

export default Signup;