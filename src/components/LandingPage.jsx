import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to Medicating App</h1>
      <div className="button-group">
      <Link to="/login" className="btn">Login</Link>
      <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;
