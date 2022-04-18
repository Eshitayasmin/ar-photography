import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
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
                <h1 className='title'><span className='ar-title'>AR </span><span className='photography-title'>Photography</span></h1>
            </div>
            <div>
                <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/home">Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</NavLink>
                <NavLink className={({isActive}) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
                

                {
                    user ? 
                    <NavLink className={({isActive}) => (isActive ? "active-link" : "link")}  onClick={handleSignOut} to='/'>SignOut</NavLink>
                    :
                    <NavLink className={({isActive}) => (isActive ? "active-link" : "link")}  to="/login">Login</NavLink>}

            </div>

        </nav>
    );
};

export default Header;