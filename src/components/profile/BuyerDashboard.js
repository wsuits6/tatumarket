import React from 'react';

const BuyerDashboard = () => {
    return (
        <div className="profile-content">
            <h2 className="section-title">My Dashboard</h2>
            
            <div className="dashboard-stats">
                <div className="stat-card">
                    <i className="fas fa-box-open"></i>
                    <h4>15</h4>
                    <p>Total Orders</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-sync-alt"></i>
                    <h4>2</h4>
                    <p>Pending Orders</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-star"></i>
                    <h4>25</h4>
                    <p>Reviews Given</p>
                </div>
            </div>

            <h3>Recent Orders</h3>
            <div className="orders-table">
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#12345</td>
                            <td>2025-10-28</td>
                            <td>GH₵250.00</td>
                            <td><span className="status-delivered">Delivered</span></td>
                            <td><a href="#">View Details</a></td>
                        </tr>
                        <tr>
                            <td>#12346</td>
                            <td>2025-11-02</td>
                            <td>GH₵180.50</td>
                            <td><span className="status-shipped">Shipped</span></td>
                            <td><a href="#">Track Order</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BuyerDashboard;
