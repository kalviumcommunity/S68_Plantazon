import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Plantazon - Your One-Stop Plant Shop</h1>
        <p>Bringing Nature to Your Doorstep</p>
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
          <h3>Add to Cart</h3>
          <p>Seamlessly add products to your cart and checkout securely.</p>
        </div>
        <div className="feature-box">
          <h3>Admin Dashboard</h3>
          <p>Manage plants, track orders, and grow your business.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Plantazon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
