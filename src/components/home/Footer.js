import React from 'react';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About TaTU Market</h3>
                    <p>TaTU Market is Ghana’s online marketplace where sellers showcase their products and buyers shop safely and conveniently.</p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#products">Shop</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#features">About Us</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping Information</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> Accra, Ghana</li>
                        <li><i className="fas fa-phone"></i> +233 XX XXX XXXX</li>
                        <li><i className="fas fa-envelope"></i> info@tatumarket.com</li>
                        <li><i className="fas fa-clock"></i> Mon-Sat: 8AM - 8PM</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 TaTU Market. All rights reserved. Connecting sellers and buyers across Ghana.</p>
            </div>
        </footer>
    );
}

export default Footer;
