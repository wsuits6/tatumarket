
import React from 'react';

const BuyerProfile = () => {
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
                        <a href="index.html" style={{textDecoration: 'none', color: 'inherit'}}><i className="fas fa-store"></i> TATU</a>
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
                        <div className="header-icon">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>

                    <button className="mobile-menu-btn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>

            {/* Navigation */}
            <nav>
                <div className="nav-content">
                    <ul className="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#products">Shop</a></li>
                        <li><a href="index.html#categories">Categories</a></li>
                        <li><a href="index.html#features">About Us</a></li>
                        <li><a href="index.html#contact">Contact</a></li>
                        <li><a href="seller_profile.html" className="highlight">Become a Seller</a></li>
                    </ul>
                </div>
            </nav>

            {/* Buyer Profile Section */}
            <section className="profile-section" style={{padding: '40px 20px'}}>
                <div className="profile-container" style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px'}}>
                    
                    {/* Profile Sidebar */}
                    <div className="profile-sidebar" style={{background: 'var(--card-bg)', padding: '20px', borderRadius: '10px'}}>
                        <div className="profile-avatar" style={{textAlign: 'center', marginBottom: '20px'}}>
                            <img src="https://i.pravatar.cc/150?u=buyer" alt="Buyer Avatar" style={{width: '120px', height: '120px', borderRadius: '50%', border: '3px solid var(--primary-blue)'}} />
                            <h3 style={{marginTop: '10px', color: 'var(--text-light)'}}>Buyer Name</h3>
                            <p style={{color: 'var(--dark-gray)'}}>buyer@example.com</p>
                        </div>
                        <ul className="profile-nav" style={{listStyle: 'none'}}>
                            <li><a href="#" className="active" style={{display: 'block', padding: '12px 15px', color: 'var(--text-light)', borderRadius: '5px', marginBottom: '5px', background: 'var(--primary-blue)'}}><i className="fas fa-tachometer-alt" style={{marginRight: '10px'}}></i> Dashboard</a></li>
                            <li><a href="#" style={{display: 'block', padding: '12px 15px', color: 'var(--text-light)', borderRadius: '5px', marginBottom: '5px'}}><i className="fas fa-box" style={{marginRight: '10px'}}></i> My Orders</a></li>
                            <li><a href="#" style={{display: 'block', padding: '12px 15px', color: 'var(--text-light)', borderRadius: '5px', marginBottom: '5px'}}><i className="fas fa-heart" style={{marginRight: '10px'}}></i> Wishlist</a></li>
                            <li><a href="#" style={{display: 'block', padding: '12px 15px', color: 'var(--text-light)', borderRadius: '5px', marginBottom: '5px'}}><i className="fas fa-map-marker-alt" style={{marginRight: '10px'}}></i> Shipping Address</a></li>
                            <li><a href="settings.html" style={{display: 'block', padding: '12px 15px', color: 'var(--text-light)', borderRadius: '5px', marginBottom: '5px'}}><i className="fas fa-cog" style={{marginRight: '10px'}}></i> Settings</a></li>
                            <li><a href="#" style={{display: 'block', padding: '12px 15px', color: 'var(--text-light)', borderRadius: '5px', marginBottom: '5px'}}><i className="fas fa-sign-out-alt" style={{marginRight: '10px'}}></i> Logout</a></li>
                        </ul>
                    </div>

                    {/* Profile Content */}
                    <div className="profile-content" style={{background: 'var(--card-bg)', padding: '30px', borderRadius: '10px'}}>
                        <h2 className="section-title" style={{textAlign: 'left', marginBottom: '30px'}}>My Dashboard</h2>
                        
                        <div className="dashboard-stats" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px'}}>
                            <div className="stat-card" style={{background: 'var(--dark-bg)', padding: '20px', borderRadius: '10px', textAlign: 'center'}}>
                                <i className="fas fa-box-open" style={{fontSize: '32px', color: 'var(--light-blue)', marginBottom: '10px'}}></i>
                                <h4 style={{fontSize: '24px', marginBottom: '5px'}}>15</h4>
                                <p style={{color: 'var(--dark-gray)'}}>Total Orders</p>
                            </div>
                            <div className="stat-card" style={{background: 'var(--dark-bg)', padding: '20px', borderRadius: '10px', textAlign: 'center'}}>
                                <i className="fas fa-sync-alt" style={{fontSize: '32px', color: 'var(--light-blue)', marginBottom: '10px'}}></i>
                                <h4 style={{fontSize: '24px', marginBottom: '5px'}}>2</h4>
                                <p style={{color: 'var(--dark-gray)'}}>Pending Orders</p>
                            </div>
                            <div className="stat-card" style={{background: 'var(--dark-bg)', padding: '20px', borderRadius: '10px', textAlign: 'center'}}>
                                <i className="fas fa-star" style={{fontSize: '32px', color: 'var(--gold)', marginBottom: '10px'}}></i>
                                <h4 style={{fontSize: '24px', marginBottom: '5px'}}>25</h4>
                                <p style={{color: 'var(--dark-gray)'}}>Reviews Given</p>
                            </div>
                        </div>

                        <h3 style={{marginBottom: '20px'}}>Recent Orders</h3>
                        <div className="orders-table" style={{overflowX: 'auto'}}>
                            <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
                                <thead>
                                    <tr>
                                        <th style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>Order ID</th>
                                        <th style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>Date</th>
                                        <th style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>Total</th>
                                        <th style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>Status</th>
                                        <th style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>#12345</td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>2025-10-28</td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>GH₵250.00</td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}><span style={{background: '#22c55e', color: 'white', padding: '3px 8px', borderRadius: '12px', fontSize: '12px'}}>Delivered</span></td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}><a href="#" style={{color: 'var(--light-blue)'}}>View Details</a></td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>#12346</td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>2025-11-02</td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}>GH₵180.50</td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}><span style={{background: '#f59e0b', color: 'white', padding: '3px 8px', borderRadius: '12px', fontSize: '12px'}}>Shipped</span></td>
                                        <td style={{padding: '12px 15px', borderBottom: '1px solid var(--border-color)'}}><a href="#" style={{color: 'var(--light-blue)'}}>Track Order</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

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
                    <p>&copy; 2025 TaTU Market. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default BuyerProfile;
