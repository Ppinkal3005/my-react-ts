import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../components/header/header.component";
import "./sign.css";

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (name === "" || email === "" || number === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields");
            return;
        }

        alert("Signup Successful!");
        navigate('/login');

        console.log(name, email, number, password, confirmPassword);

        setName("");
        setEmail("");
        setNumber("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            <HeaderComponent />
            <div className="container">
                <div className="signup-container">
                    <h2>Signup Form</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <br /><br />

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br /><br />

                        <input
                            type="number"
                            placeholder="Enter Mobile Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                        <br /><br />

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br /><br />

                        <input
                            type="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <br /><br />

                        <button type="submit" className="signup-button">Sign Up</button>

                        <button className="home-button" onClick={() => navigate('/home')}>Home</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;