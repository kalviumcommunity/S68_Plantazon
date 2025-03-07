import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Plantazon - Your Own Plant Shop</h1>
        <p>Bring Nature to Your Doorstep with One Click</p>
      </header>

      <section className="section">
        <h2>Why Choose Plantazon?</h2>
        <p>Find the best variety of plants and seeds with easy ordering and doorstep delivery.</p>
        <ul>
          <li>🌿 Wide range of plants & seeds</li>
          <li>🛒 Easy shopping experience</li>
          <li>🔒 Secure payments</li>
          <li>📦 Fast & reliable delivery</li>
        </ul>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>Browse Plants</h3>
          <p>Discover a wide selection of plants and seeds.</p>
        </div>
        <div className="feature-box">
          <h3>Your Cart</h3>
          <p>Add products to your cart and checkout securely.</p>
        </div>
        <div className="feature-box">
          <h3>Profile</h3>
          <p>Manage plants, track orders and grow your business.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Plantazon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
