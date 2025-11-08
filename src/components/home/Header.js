import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
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
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="#">Logout</Link>
                        </div>
                    </div>
                </div>

                <button className="mobile-menu-btn">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </header>
    );
}

export default Header;
