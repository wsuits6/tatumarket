import React from 'react';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
    return (
        <div className="profile-content">
            <div className="seller-dashboard-header">
                <h2 className="section-title">Seller Dashboard</h2>
                <Link to="#" className="cta-button"><i className="fas fa-plus"></i> Add New Product</Link>
            </div>
            
            <div className="dashboard-stats">
                <div className="stat-card">
                    <i className="fas fa-dollar-sign"></i>
                    <h4>GH₵5,840</h4>
                    <p>Total Revenue</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-shopping-cart"></i>
                    <h4>120</h4>
                    <p>Total Sales</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-box-open"></i>
                    <h4>35</h4>
                    <p>Active Products</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-star"></i>
                    <h4>4.8/5</h4>
                    <p>Shop Rating</p>
                </div>
            </div>

            <h3>Recent Orders</h3>
            <div className="orders-table">
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#12346</td>
                            <td>John Doe</td>
                            <td>GH₵180.50</td>
                            <td><span className="status-processing">Processing</span></td>
                            <td><Link to="#">View Order</Link></td>
                        </tr>
                        <tr>
                            <td>#12345</td>
                            <td>Jane Smith</td>
                            <td>GH₵250.00</td>
                            <td><span className="status-completed">Completed</span></td>
                            <td><Link to="#">View Order</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SellerDashboard;
