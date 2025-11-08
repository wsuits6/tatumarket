import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to TaTU Market</h1>
                <p>Ghana’s online marketplace connecting sellers and buyers. Upload your products, shop safely, and enjoy seamless transactions!</p>
                <a href="#products" className="cta-button">Shop Now <i className="fas fa-arrow-right"></i></a>
                <Link to="/seller-profile" className="cta-button secondary">Become a Seller <i className="fas fa-upload"></i></Link>
            </div>
        </section>
    );
}

export default Hero;
