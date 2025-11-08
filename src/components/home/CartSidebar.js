import React from 'react';

const CartSidebar = () => {
    return (
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
    );
}

export default CartSidebar;
