import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav id="main-nav">
                <div className="nav-content">
                    <ul className="nav-links">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><a href="#products">Shop</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#features">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Link to="/seller-profile" className="highlight">Become a Seller</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="mobile-nav-container" id="mobile-nav">
                <ul className="mobile-nav-links">
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><a href="#products">Shop</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#features">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/seller-profile" className="highlight">Become a Seller</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Nav;
