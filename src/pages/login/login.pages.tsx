import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.pages.css';

const LoginPage = () => {
    const [email, setEmail] = useState('ppinkal38@gmail.com');
    const [password, setPassword] = useState('123456');
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle login logic here
        console.log(e.currentTarget.email.value, e.currentTarget.password.value);

        if (e.currentTarget.email.value === 'ppinkal38@gmail.com' && e.currentTarget.password.value === '123456') {
            console.log('Login successful');
            navigate('/home');
        } else {
            console.log('Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Please enter your details to sign in.</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label>Remember me</label>
                        </div>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;