import React, { useState } from 'react';
import { User, Mail, Lock, EyeOff, Eye } from 'lucide-react';
import "./LoginSignup.css"
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Signup', formData);
  };

  return (
    <div className="Lcontainer">
      <div className="Lform-container">
        <div className="Lheader">
          <h2>{isLogin ? 'Welcome Back!' : 'Join NewsApp Today'}</h2>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="Ltoggle-btn"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
        <form className="Lform" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="Lform-group">
              <label htmlFor="name">Full Name</label>
              <div className="Linput-wrapper">
                <User className="Licon" size={18} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="Gourav Choudhary"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}
          <div className="Lform-group">
            <label htmlFor="email">Email address</label>
            <div className="Linput-wrapper">
              <Mail className="Licon" size={18} />
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="Lform-group">
            <label htmlFor="password">Password</label>
            <div className="Linput-wrapper">
              <Lock className="Licon" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="Lpassword-toggle"
              >
                {showPassword ? (
                  <EyeOff className="Licon" size={18} />
                ) : (
                  <Eye className="Licon" size={18} />
                )}
              </button>
            </div>
          </div>
          <button type="submit" className="Lsubmit-btn">
            {isLogin ? 'Log in' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;