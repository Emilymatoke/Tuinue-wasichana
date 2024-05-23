import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/Charitylogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CharityLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("url_placement/charity/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                toast.success("Login Successful", {
                    autoClose: 100,
                    onClose: () => {
                        navigate("/charityhome");
                    },
                });
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Try again");
        }
    };

    return (
        <div className="wrapper2">
            <div className="container1">
                <h2>Charity Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CharityLogin;
