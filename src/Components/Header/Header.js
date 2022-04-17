import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <h1><span className='ar-title'>AR </span><span className='photography-title'>PHOTOGRAPHY</span></h1>
            </div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>

            </div>

        </nav>
    );
};

export default Header;