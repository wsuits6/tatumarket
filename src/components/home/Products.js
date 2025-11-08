import React from 'react';

const Products = () => {
    return (
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
    );
}

export default Products;
