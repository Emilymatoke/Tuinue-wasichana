import { useState } from "react";
import "../styling/Adminlogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Userlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5555/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if ( response.ok) {
                toast.success("Login Successful", {
                    autoClose: 100,
                    onClose: () => {
                        window.location.href = "/Userhome";
                    },
                });
            } else {
                toast.error("invalid email")
            }
        } catch (error){
            console.error("Error:", error);
            toast.error("an error occurred. try again")
        }
    };


    console.log("userlogin component rendered");

    return (
        <div className="wrapper2">
            <div className="container1">
                <h2>Sign in</h2>
                <br />

                <form onSubmit={handleSignIn}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        name="email"
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
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>         
                    <button type="submit" >Sign In</button>

                </form>
                <ToastContainer />
            </div>
        </div>
    )

}

export default Userlogin;