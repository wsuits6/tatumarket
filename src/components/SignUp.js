
import React from 'react';

const SignUp = () => {
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

            {/* Sign Up Form */}
            <div className="auth-container">
                <h2 className="auth-title">Create Your Account</h2>
                <form action="/handle-signup" method="POST">
                    {/* 
                        SECURITY: Use HTTPS. The form action should point to a secure, server-side endpoint.
                        Implement CSRF (Cross-Site Request Forgery) protection with a hidden token.
                    */}
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" name="fullname" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required minLength="8" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <button type="submit" className="auth-btn">Create Account</button>
                    <div className="auth-links">
                        <p>Already have an account? <a href="login.html">Login</a></p>
                    </div>
                </form>
                {/* 
                    SECURITY NOTE FOR DEVELOPERS:
                    - Server-side validation is crucial. Ensure passwords match and meet complexity requirements.
                    - NEVER store passwords in plaintext. Use a strong, one-way hashing algorithm like Argon2 or bcrypt.
                    - After signup, consider implementing an email verification step to confirm user identity.
                */}
            </div>
        </>
    );
}

export default SignUp;
