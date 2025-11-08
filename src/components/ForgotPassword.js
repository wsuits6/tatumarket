
import React from 'react';

const ForgotPassword = () => {
    return (
        <>
            {/* Header */}
            <header>
                <div className="header-content" style={{maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'center'}}>
                    <div className="logo">
                        <a href="index.html" style={{textDecoration: 'none', color: 'inherit'}}><i className="fas fa-store"></i> TATU Market</a>
                    </div>
                </div>
            </header>

            {/* Forgot Password Form */}
            <div className="auth-container">
                <h2 className="auth-title">Reset Your Password</h2>
                <p style={{textAlign: 'center', color: 'var(--text-dark)', marginBottom: '20px'}}>Enter your email address and we will send you a link to reset your password.</p>
                <form action="/handle-forgot-password" method="POST">
                    {/* 
                        SECURITY: Use HTTPS. The form action should point to a secure, server-side endpoint.
                        Implement CSRF protection.
                    */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <button type="submit" className="auth-btn">Send Reset Link</button>
                    <div className="auth-links">
                        <a href="login.html">Back to Login</a>
                    </div>
                </form>
                {/* 
                    SECURITY NOTE FOR DEVELOPERS:
                    - Generate a secure, single-use, time-limited token for the password reset link.
                    - Do not confirm whether an email address is registered or not to prevent user enumeration.
                    - Send the reset link to the user'''s email address.
                */}
            </div>
        </>
    );
}

export default ForgotPassword;
