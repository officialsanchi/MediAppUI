import React from 'react';
import './Medication.css';

 function Medication() {
  return (
    <div className="med-screen">
      {/* Header */}
      <header className="header">
        <h1>Medicating</h1>
        <div className="header-icons">
          <span role="img" aria-label="bell">🔔</span>
          <span role="img" aria-label="settings">⚙️</span>
        </div>
      </header>

      {/* Main Card */}
      <div className="med-card">
        <div className="med-info">
          <div>
            <h2>Hemman</h2>
            <p>Next dose in 0.9 hrs</p>
          </div>
          <div className="med-circle"></div>
        </div>
        <div className="med-buttons">
          <button className="btn primary">Take Now</button>
          <button className="btn secondary">Later</button>
        </div>
      </div>

      {/* Medication Grid */}
      <div className="med-grid">
        {[...Array(4)].map((_, i) => (
          <div className="pill-card" key={i}>
            <div className="pill-icon"></div>
            <h3>Pill {i + 1}</h3>
            <p>Dose info</p>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <footer className="bottom-nav">
        <span role="img" aria-label="search">🔍</span>
        <span role="img" aria-label="home">🏠</span>
        <span role="img" aria-label="profile">👤</span>
      </footer>
    </div>
  );
}
export default Medication;
