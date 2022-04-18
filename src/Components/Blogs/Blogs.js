import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='answer'>
            <h4 className='text-center text-success mb-4'>Question: Difference between authorization and authentication.</h4>
              
            <div className='answer-one'>
                <div>
                    <h4>Authorization</h4>
                    <p>1. Authorization determines whether you are authorized to access the resources.</p>
                    <p>2. It determines what user can and can't access.</p>
                    <p>3. While in this process, users or persons are validated.</p>
                    <p>4. This process is done after the authentication process.</p>
                    <p>5.  It needs user's privilege or security levels.</p>
                </div>
                <div>
                    <h4>Authentication:</h4>
                    <p>1. Authentication confirms your identity to grant access to the system.</p>
                    <p>2. It determines whether user is what he claims to be.</p>
                    <p>3. In authentication process, users or persons are verified.</p>
                    <p>4. It is done before the authorization process.</p>
                    <p>5. It needs usually user's login details.</p>
                </div>
            </div>
            </div>
            <div className='answer'>
                <h4 className='text-center text-success mb-4'>Question: What other services does firebase provide other than authentication?</h4>

                <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.Firebase provides authentication using email, password, and phone number using OTP, and it is also free!!!</p>
                <p>In addition to authentication, Firebase provides many more services. Most useful of them are:</p>
                <ul>
                    <li><span className='option'>Cloud Messaging:</span> Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost. This service is free.</li>
                    <li><span className='option'>Hosting:</span> Firebase Hosting is production-grade web content hosting for developers. It provides fast and secure hosting for your web app, static and dynamic content.</li>
                    <li><span className='option'>Google Analytics:</span> The service provides visualization of all this information on just a single tap. It's free too.</li>
                    <li><span className='option'>Dynamic Links:</span> This service is majorly used to generate deep links that redirect user traffic to your landing page, website, or mobile applications.</li>
                    <li><span className='option'>Remote Config:</span> It helps in remotely changing your application UI and content, without publishing it again.</li>
                </ul>
            </div>

        </div>
    );
};

export default Blogs;