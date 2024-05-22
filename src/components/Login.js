import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to="/adminlogin">
                <button>Admin Login</button>
            </Link>
            <Link to="/charitylogin">
                <button>Charity Login</button>
            </Link>
            <Link to="/donorlogin">
                <button>Donor Login</button>
            </Link>
        </div>
    );
}

export default LoginPage;
