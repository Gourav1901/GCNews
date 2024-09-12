import React from 'react';
import { Newspaper, Globe, Clock, Users } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <header className="about-header">
          <h1 className="about-title">About NewsApp</h1>
          <p className="about-subtitle">Your trusted source for timely and accurate news</p>
        </header>

        <section className="about-section mission">
          <div className="mission-content">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              At NewsApp, we believe in the power of information to shape our world. Our mission is to deliver 
              accurate, unbiased, and timely news to our readers, empowering them to make informed decisions 
              and stay connected with the world around them.
            </p>
            <p className="mission-text">
              Founded in 2020, NewsApp has quickly grown to become a leading digital news platform, 
              serving millions of readers across the globe. We combine cutting-edge technology with 
              traditional journalistic values to bring you the news that matters, when it matters.
            </p>
          </div>
        </section>

        <section className="about-grid">
          <div className="about-feature">
            <Newspaper className="feature-icon" size={48} />
            <h3 className="feature-title">Comprehensive Coverage</h3>
            <p className="feature-text">From local stories to global events, we cover news that matters to you.</p>
          </div>
          <div className="about-feature">
            <Globe className="feature-icon" size={48} />
            <h3 className="feature-title">Global Perspective</h3>
            <p className="feature-text">Our international network of journalists brings you diverse viewpoints.</p>
          </div>
          <div className="about-feature">
            <Clock className="feature-icon" size={48} />
            <h3 className="feature-title">Real-Time Updates</h3>
            <p className="feature-text">Stay informed with breaking news alerts and live coverage.</p>
          </div>
          <div className="about-feature">
            <Users className="feature-icon" size={48} />
            <h3 className="feature-title">Community Engagement</h3>
            <p className="feature-text">Join the conversation with our interactive features and forums.</p>
          </div>
        </section>

        <section className="community-section">
          <div className="community-content">
            <h2 className="community-title">Join Our Community</h2>
            <p className="community-text">
              Be part of a growing community of informed citizens. Subscribe to our newsletter, 
              follow us on social media, and download our app to stay connected with the latest news.
            </p>
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
