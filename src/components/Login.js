import { Link } from'react-router-dom';
import '../styling/loggin.css';



const Login = () => {
    console.log("login component rendered");

    return (
        <div className='warpper'>
            <div className='container1'>
                <h1 className='heading'>Welcome to the platform</h1>
                  <br />

                  <p className='description'>Unlock more features by Signing in</p>
                  <Link to="/userlogin" className='link login-link'>User Login</Link>
                  <Link to="/adminlogin" className='link signup-link'>Admin Login</Link>
            </div>
        </div>
    )
}


export default Login;