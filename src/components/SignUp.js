import React from 'react';
import { Link } from 'react-router-dom';
import AuthHeader from './home/AuthHeader';

const SignUp = () => {
    return (
        <>
            <AuthHeader />
            <div className="auth-container">
                <h2 className="auth-title">Create Your Account</h2>
                <form action="/handle-signup" method="POST">
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
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUp;
