import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
       
        <nav className='navbar'>
            <div>
                <h1><span className='ar-title'>AR </span><span className='photography-title'>Photography</span></h1>
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                

                {
                    user ? 
                    <Link onClick={handleSignOut} to='/'>SignOut</Link>
                    :
                    <Link to="/login">Login</Link>}

            </div>

        </nav>
    );
};

export default Header;