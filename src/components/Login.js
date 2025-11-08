import React from 'react';
import { Link } from 'react-router-dom';
import AuthHeader from './home/AuthHeader';

const Login = () => {
    return (
        <>
            <AuthHeader />
            <div className="auth-container">
                <h2 className="auth-title">Login to Your Account</h2>
                <form action="/handle-login" method="POST">
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
                        <Link to="/signup">Create an Account</Link>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
