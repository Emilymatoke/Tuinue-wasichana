// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Import global CSS file
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import CharityListingPage from './CharityListingPage';
import CharityDetailPage from './CharityDetailPage';
import UserDashboardPage from './UserDashboardPage';
import AdminDashboardPage from './AdminDashboardPage';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/charities" exact component={CharityListingPage} />
            <Route path="/charities/:id" component={CharityDetailPage} />
            <Route path="/dashboard" component={UserDashboardPage} />
            <Route path="/admin" component={AdminDashboardPage} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
