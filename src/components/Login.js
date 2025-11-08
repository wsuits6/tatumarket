
import React from 'react';

const Login = () => {
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

            {/* Login Form */}
            <div className="auth-container">
                <h2 className="auth-title">Login to Your Account</h2>
                <form action="/handle-login" method="POST">
                    {/* 
                        SECURITY: Use HTTPS. The form action should point to a secure, server-side endpoint.
                        It'''s also critical to implement CSRF (Cross-Site Request Forgery) protection.
                        A common method is to include a hidden input with a unique token.
                        e.g., <input type="hidden" name="csrf_token" value="GENERATED_TOKEN"> 
                    */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="auth-btn">Login</button>
                    <div className="auth-links">
                        <a href="signup.html">Create an Account</a>
                        <a href="forgot_password.html">Forgot Password?</a>
                    </div>
                </form>
                {/* 
                    SECURITY NOTE FOR DEVELOPERS:
                    - Server-side validation is crucial. Never trust client-side input.
                    - To prevent SQL injection, use parameterized queries or prepared statements when checking credentials.
                    - Implement rate limiting and account lockout policies to protect against brute-force attacks.
                */}
            </div>
        </>
    );
}

export default Login;
