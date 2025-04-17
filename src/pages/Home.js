// Home.js (Corporate Style for Codveda)
import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-text">
          <h1>Welcome to Codveda Technologies</h1>
          <p>
            At Codveda, we deliver innovative IT solutions that empower businesses
            to thrive in the digital era. Our expertise spans web development,
            digital marketing, SEO optimization, and AI-driven automation.
          </p>
          <div className="home-cta">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="home-illustration">
          <img
            src="codveda1.png"
            alt="Codveda Solutions Illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;



  