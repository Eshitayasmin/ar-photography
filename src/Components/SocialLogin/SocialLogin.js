import React from 'react';
import './SocialLogin.css';
import google from '../../images/social/google.png';
import github from '../../images/social/github.png';
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, user, loading, giterror] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;
    if (googleError) {
        errorElement = <p className='error-message'>Error: {googleError?.message} </p>
    }

    if(googleLoading){
        return <Loading></Loading>
    }

    if (googleUser || user) {
        navigate('/');
    }

    return (
        <div>
            <div className='or-section'>
                <div className='or-border'></div>
                 <p className='mt-2 px-2'>or</p>
                 <div className='or-border'></div>
            </div>

           {errorElement &&  <p>{errorElement}</p>}

            <div className='social-btn-section'>
                <button onClick={() => signInWithGoogle()}
                    className='social-btn w-50'>
                    <img className='logo' src={google} alt="" />
                    <span className='px-1'>Google Sign In</span>
                </button>

                <button onClick={() => signInWithGithub()}
                    className='social-btn w-50'>
                    <img className='logo' src={github} alt="" />
                    <span className='px-1'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;