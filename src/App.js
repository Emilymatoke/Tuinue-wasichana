import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import Donate from './components/Donate';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Adminlogin from './components/Adminlogin';
import Userlogin from './components/Userlogin';
import Layout from './components/Layout';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Layout />} > 
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/userlogin" element={<Userlogin />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;