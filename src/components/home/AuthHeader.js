import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
    return (
        <header className="auth-header">
            <div className="header-content">
                <div className="logo">
                    <Link to="/">
                        <i className="fas fa-store"></i> TATU Market
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default AuthHeader;
