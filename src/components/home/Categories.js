import React from 'react';

const Categories = () => {
    return (
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
    );
}

export default Categories;
