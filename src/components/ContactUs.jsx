import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './ContactUs.css'; 

const ContactUs = () => {
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
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Please fill out this form or use our contact information below.</p>
          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="icon" size={24} />
              <span>123 News Street, Indore, India</span>
            </div>
            <div className="contact-item">
              <Phone className="icon" size={24} />
              <span>9111733035</span>
            </div>
            <div className="contact-item">
              <Mail className="icon" size={24} />
              <span>contact@newsapp.com</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <Send className="icon" size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
