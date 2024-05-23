import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
import "../styling/Navbar.css";

function NavBar({ user }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="header-container">
        <header>
          <div className="header-class-container">
            <div className="flex-1">
              <div className="flex-1 items-center px-5 py-5">
              </div>
              <div className="flex-1 text-right">
                <span className="mr-4">
                  <i className="fa fa-envelope"></i> <a href="mailto:info@tuinuewasichana.com">info@tuinuewasichana.com</a>
                </span>
              </div>
            </div>
          </div>
        </header>
        <nav className="nav-links">
          <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
          <NavLink to="/donate" className="hover:text-gray-400">Donate</NavLink>
          <div>
            <Link to="/signup" className="px-3">Sign Up</Link>
            <Link to="/login" className="px-3">Login</Link>
          </div>
          <div>
            <button onClick={handleShow} className="text-white focus:outline-none">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>

      {show && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
          <div className="bg-white w-64 h-full shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Tuinue Wasichana</h2>
              <button onClick={handleClose} className="text-gray-600 focus:outline-none">
                <i className="fa fa-times"></i>
              </button>
            </div>
            <nav className="p-4">
              <NavLink to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-200" onClick={handleClose}>Home</NavLink>
              <NavLink to="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-200" onClick={handleClose}>About</NavLink>
              <NavLink to="/donate" className="block py-2 px-4 text-gray-700 hover:bg-gray-200" onClick={handleClose}>Donate</NavLink>
              <NavLink to="/signup" className="block py-2 px-4 text-gray-700 hover:bg-gray-200" onClick={handleClose}>Sign Up</NavLink>
              <NavLink to="/login" className="block py-2 px-4 text-gray-700 hover:bg-gray-200" onClick={handleClose}>Login</NavLink>
            </nav>
          </div>
        </div>
      )}

    </>
  );
}

export default NavBar;