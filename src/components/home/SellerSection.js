import React from 'react';
import { Link } from 'react-router-dom';

const SellerSection = () => {
    return (
        <section className="seller-section" id="seller">
            <h2 className="section-title">Become a Seller</h2>
            <p>Join TaTU Market as a seller, upload your products, and reach thousands of buyers in Ghana. <Link to="/seller-profile">Sign up now!</Link></p>
        </section>
    );
}

export default SellerSection;
