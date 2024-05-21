import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar({ user }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-blue-800 text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1">
            <p>Welcome to Tuinue Wasichana</p>
          </div>
          <div className="flex-1 text-right">
            <span className="mr-4">
              <i className="fa fa-phone"></i> +254 719 405 599
            </span>
            <span className="mr-4">
              <i className="fa fa-envelope"></i> <a href="mailto:info@tuinuewasichana.com">info@tuinuewasichana.com</a>
            </span>
          </div>
          <div className="flex-1 text-right">
            <span>
              <i className="fa fa-user"></i> <a href="#">{user ? `Welcome ${user['name']}` : 'Welcome Guest'}</a>
            </span>
          </div>
        </div>
      </header>

      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white">
              <img src={logo} alt="Tuinue Wasichana Logo" className="h-8 w-8 mr-2" />
              <span className="font-semibold text-xl">Tuinue Wasichana</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
            <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
            <NavLink to="/donate" className="hover:text-gray-400">Donate</NavLink>
            <button onClick={handleShow} className="hover:text-gray-400">
              Menu
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={handleShow} className="text-white focus:outline-none">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

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
