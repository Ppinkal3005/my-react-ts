import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.pages.css';

const LoginPage = () => {
    const [email, setEmail] = useState('ppinkal38@gmail.com');
    const [password, setPassword] = useState('123456');
    const navigate = useNavigate();
    const [users, setUsers] = useState([{ email: 'ppinkal38@gmail.com', password: '123456' },
    { email: 'sagar@gmail.com', password: '123123' },
    { email: 'dipika@gmail.com', password: '321321' },
    { email: 'pooja@gmail.com', password: '1234567' }
    ]);


    const handleSubmit = (e: any) => {
        e.preventDefault();



        var isValidUser = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email && users[i].password === password) {
                isValidUser = true;
                break;
            }
        }
        //     const isValidUser = users.some(u => u.email === email && u.password === password);

        if (isValidUser) {
            console.log('Login successful');
            navigate('/home2');
        } else {
            console.log('Login failed');
            alert('Invalid email or password');
        }
    };

    // function setPassword(value: string): void {
    //     throw new Error('Function not implemented.');
    // }

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
                        <a href="forget" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <a href="signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;