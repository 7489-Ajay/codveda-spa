import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 data-aos="fade-down">About <span>Codveda</span></h1>
        <p data-aos="fade-up">
          Codveda is a leading ed-tech startup focused on empowering aspiring developers through hands-on learning. We believe in learning by building — giving students and professionals real-world projects to sharpen their skills.
        </p>
        <p data-aos="fade-up">
          Founded by visionary tech leaders, Codveda bridges the gap between theory and practice in software development. With hundreds of students enrolled in internships and project-based programs, we are shaping the next generation of engineers, one coder at a time.
        </p>
        <p data-aos="fade-up">
          Our mission is to provide quality, accessible, and practical tech education to every corner of India. From frontend to backend, our curriculum is designed to build confidence, skill, and employability.
        </p>
        <div className="founder-quote" data-aos="fade-up">
          <blockquote>
            "We don’t just train developers, we nurture innovators."
            <span className="ceo">– CEO, Codveda</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;

  