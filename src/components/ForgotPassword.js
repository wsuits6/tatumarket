import React from 'react';
import { Link } from 'react-router-dom';
import AuthHeader from './home/AuthHeader';

const ForgotPassword = () => {
    return (
        <>
            <AuthHeader />
            <div className="auth-container">
                <h2 className="auth-title">Reset Your Password</h2>
                <p style={{textAlign: 'center', color: 'var(--text-dark)', marginBottom: '20px'}}>Enter your email address and we will send you a link to reset your password.</p>
                <form action="/handle-forgot-password" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <button type="submit" className="auth-btn">Send Reset Link</button>
                    <div className="auth-links">
                        <Link to="/login">Back to Login</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
