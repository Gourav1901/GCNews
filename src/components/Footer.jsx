import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import './Footer.css'; // Link to the custom CSS file

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-logo">
            <h2>NewsApp</h2>
            <p>Your trusted source for timely and accurate news coverage from around the world.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Categories</h3>
            <ul>
              <li><Link to="/category/politics">Politics</Link></li>
              <li><Link to="/category/technology">Technology</Link></li>
              <li><Link to="/category/sports">Sports</Link></li>
              <li><Link to="/category/entertainment">Entertainment</Link></li>
            </ul>
          </div>
          <div>
            <h3>Newsletter</h3>
            <p>Stay updated with our latest news and offers.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NewsApp. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
