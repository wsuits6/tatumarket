
import React from 'react';

const Settings = () => {
    return (
        <>
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
            <header>
                <div className="header-content">
                    <div className="logo">
                        <a href="index.html" style={{textDecoration: 'none', color: 'inherit'}}><i className="fas fa-store"></i> TATU</a>
                    </div>
                </div>
            </header>
            <div style={{textAlign: 'center', padding: '50px'}}>
                <h1>Settings</h1>
                <p>This is the settings page. More content will be added soon.</p>
            </div>
        </>
    );
}

export default Settings;
