
import React from 'react';

const Home = () => {
    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-content">
                    <div className="top-bar-left">
                        <span><i className="fas fa-phone"></i> +233 XX XXX XXXX</span>
                        <span><i className="fas fa-envelope"></i> info@tatumarket.com</span>
                    </div>
                    <div className="top-bar-right">
                        <span><i className="fas fa-truck"></i> Free Shipping on Orders Over GH₵500</span>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header>
                <div className="header-content">
                    <div className="logo">
                        <i className="fas fa-store"></i> TATU
                    </div>
                    
                    <div className="search-bar">
                        <input type="text" id="searchInput" placeholder="Search for products..." />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    <div className="header-actions">
                        <div className="header-icon">
                            <i className="fas fa-heart"></i>
                            <span className="badge" id="wishlistCount">0</span>
                        </div>
                        <div className="header-icon">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge" id="cartCount">0</span>
                        </div>
                        <div className="header-icon" id="user-menu">
                            <i className="fas fa-user"></i>
                            <div className="dropdown-menu">
                                <a href="login.html">Login</a>
                                <a href="signup.html">Sign Up</a>
                                <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>

                    <button className="mobile-menu-btn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>

            {/* Navigation */}
            <nav id="main-nav">
                <div className="nav-content">
                    <ul className="nav-links">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#products">Shop</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#features">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="seller_profile.html" className="highlight">Become a Seller</a></li>
                    </ul>
                </div>
            </nav>

            <div className="mobile-nav-container" id="mobile-nav">
                <ul className="mobile-nav-links">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#products">Shop</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#features">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="seller_profile.html" className="highlight">Become a Seller</a></li>
                </ul>
            </div>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to TaTU Market</h1>
                    <p>Ghana’s online marketplace connecting sellers and buyers. Upload your products, shop safely, and enjoy seamless transactions!</p>
                    <a href="#products" className="cta-button">Shop Now <i className="fas fa-arrow-right"></i></a>
                    <a href="seller_profile.html" className="cta-button secondary">Become a Seller <i className="fas fa-upload"></i></a>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section" id="categories">
                <h2 className="section-title">Browse by Category</h2>
                <div className="categories-grid">
                    <div className="category-card">
                        <div className="category-icon"><i className="fas fa-laptop"></i></div>
                        <h3>Electronics</h3>
                        <p>Latest gadgets & tech</p>
                    </div>
                    <div className="category-card">
                        <div className="category-icon"><i className="fas fa-tshirt"></i></div>
                        <h3>Fashion</h3>
                        <p>Clothing & accessories</p>
                    </div>
                    <div className="category-card">
                        <div className="category-icon"><i className="fas fa-home"></i></div>
                        <h3>Home & Living</h3>
                        <p>Furniture & decor</p>
                    </div>
                    <div className="category-card">
                        <div className="category-icon"><i className="fas fa-spa"></i></div>
                        <h3>Beauty</h3>
                        <p>Cosmetics & skincare</p>
                    </div>
                    <div className="category-card">
                        <div className="category-icon"><i className="fas fa-basketball-ball"></i></div>
                        <h3>Sports</h3>
                        <p>Fitness & outdoor</p>
                    </div>
                    <div className="category-card">
                        <div className="category-icon"><i className="fas fa-gamepad"></i></div>
                        <h3>Toys & Games</h3>
                        <p>Fun for all ages</p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section" id="products">
                <h2 className="section-title">Featured Products</h2>
                
                <div className="filter-bar">
                    <div className="filter-buttons">
                        <button className="filter-btn active">All Products</button>
                        <button className="filter-btn">Electronics</button>
                        <button className="filter-btn">Fashion</button>
                        <button className="filter-btn">Home</button>
                        <button className="filter-btn">Beauty</button>
                    </div>
                    <select className="sort-dropdown">
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>

                <div className="products-grid" id="productsGrid">
                    {/* Products will be dynamically loaded here */}
                </div>
            </section>

            {/* Features Section */}
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

            {/* Seller Section */}
            <section className="seller-section" id="seller">
                <h2 className="section-title">Become a Seller</h2>
                <p>Join TaTU Market as a seller, upload your products, and reach thousands of buyers in Ghana. <a href="seller_profile.html">Sign up now!</a></p>
            </section>

            {/* Cart Sidebar */}
            <div className="cart-sidebar" id="cartSidebar">
                <div className="cart-header">
                    <h2>Shopping Cart (<span id="cartItemCount">0</span>)</h2>
                    <button className="cart-close">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="cart-items" id="cartItemsContainer">
                    <div className="empty-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <h3>Your cart is empty</h3>
                        <p>Start adding some products!</p>
                    </div>
                </div>
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <span>GH₵<span id="cartTotal">0</span></span>
                    </div>
                    <button className="checkout-btn">
                        Proceed to Checkout <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            {/* Footer */}
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

            {/* Theme Toggle Button */}
            <button id="themeToggleBtn" style={{position: 'fixed', bottom: '20px', right: '20px', background: '#fff', border: 'none', padding: '10px 15px', borderRadius: '50px', boxShadow: '0 4px 6px rgba(0,0,0,0.2)', cursor: 'pointer', zIndex: 1000}}>
                <i className="fas fa-moon"></i>
            </button>
        </>
    );
}

export default Home;
