import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src={logo} alt="Tuinue Wasichana Logo" className="h-10 inline-block mr-2" />
            <span className="text-lg font-bold">Tuinue Wasichana</span>
          </div>
          <div>
            <span className="mr-4">+254 719 405 599</span>
            <span>info@tuinuewasichana.com</span>
          </div>
          <div>
            <span className="ml-4">Welcome Guest</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto flex justify-between">
          <div>
            <Link to="/" className="px-3">Home</Link>
            <Link to="/about" className="px-3">About</Link>
            <Link to="/donate" className="px-3">Donate</Link>
          </div>
          <div>
            <Link to="/signup" className="px-3">Sign Up</Link>
            <Link to="/login" className="px-3">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Tuinue Wasichana</h1>
          <p className="text-lg">Empowering school-going girls with sanitary towels, clean water, and proper sanitation facilities.</p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">Our Charity Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">Sanitary Towels Distributed</h3>
              <p>Over 10,000 girls provided with sanitary towels annually.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">Clean Water Projects</h3>
              <p>20 schools equipped with clean water facilities.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">Sanitation Facilities</h3>
              <p>15 schools provided with new sanitation facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>Privacy Policy | Terms of Service | Contact Us</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
