import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encoded}`, '_blank');
  };

  return (
    <section className="contact-section">
      <h1 data-aos="fade-down">Get in Touch with <span>Codveda</span></h1>
      <form onSubmit={handleSubmit} className="contact-form" data-aos="zoom-in">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn-contact">Send on WhatsApp</button>
      </form>
    </section>
  );
}

export default Contact;