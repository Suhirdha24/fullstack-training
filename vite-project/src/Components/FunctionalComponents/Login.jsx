import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // useNavigate hook

    const login = async (event) => {
        event.preventDefault();
        try {
            const req = await axios.post("https://fullstack-training-qhfq.onrender.com/login", {
                email,
                password,
            });
            console.log(req.data);
            const isLoginSuccessful = req.data.isLoggedIn;
            console.log(isLoginSuccessful);
            if (isLoginSuccessful) {
                const message = req.data.message;
                console.log(message);
                navigate('/use-memo'); // Use navigate function here
            } else {
                console.log("Inside else");
                const message = req.data.message;
                console.log(message);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div>
            <form onSubmit={login}>
                <h1>Login</h1>

                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default Login;
