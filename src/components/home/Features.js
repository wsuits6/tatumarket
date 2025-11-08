import React from 'react';

const Features = () => {
    return (
        <section className="features-section" id="features">
            <h2 className="section-title" style={{color: 'white'}}>Why Choose TaTU Market?</h2>
            <div className="features-grid">
                <div className="feature-item">
                    <div className="feature-icon"><i className="fas fa-upload"></i></div>
                    <h3>Easy Selling</h3>
                    <p>Sellers can quickly upload and manage their products.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                    <h3>Safe Shopping</h3>
                    <p>Buyers enjoy secure transactions and verified sellers.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"><i className="fas fa-hand-holding-dollar"></i></div>
                    <h3>Affordable Prices</h3>
                    <p>Competitive prices from multiple sellers, plus discounts.</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon"><i className="fas fa-headset"></i></div>
                    <h3>24/7 Support</h3>
                    <p>Our customer service team is always ready to help.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
