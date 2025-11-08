import React from 'react';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-content">
                <div className="top-bar-left">
                    <span><i className="fas fa-phone"></i> +233 53 471 9558</span>
                    <span><i className="fas fa-envelope"></i> info@tatumarket.com</span>
                </div>
                <div className="top-bar-right">
                    <span><i className="fas fa-truck"></i> Free Shipping on Orders Over GH₵500</span>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
