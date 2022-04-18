import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/about';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    if (user) {
        navigate(from, {replace: true});
    }

    if(loading || sending){
        return <Loading></Loading>
    }

    let errorMessage;
    if(error || resetError){
         errorMessage = <p className='error-message'>{error ? error.message : resetError.message}</p>
    }
    else{
        errorMessage = "";
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    const resetPassword = async () => {
        if (email) {
            sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else{
           toast('Please provide your email address') 
        }
    }

    const navigateSignup = () => {
        navigate('/signup');
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleLogin} >
                <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Your Email' required/>

                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required/>
                 <p>{errorMessage}</p>
                <button className='submit-btn'>Login</button>

                <p className='mb-1'><small>New to AR PHOTOGRAPHY? <span onClick={navigateSignup} className='text-primary btn btn-link text-decoration-none p-0 mb-1 ms-1'>Please Signup</span></small></p>

                <p className='pt-0'><small>Forget password? <span onClick={resetPassword} className='text-primary text-decoration-none btn btn-link p-0 mb-1 ms-1'>Reset password</span></small>
                </p>

                <ToastContainer/>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;