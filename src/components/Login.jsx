import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import './Login.css';

const Login = ({ onToggleMode, isDarkMode }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className={`login-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle"
        onClick={onToggleMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      {/* AI Chatbot Icon */}
      <div className="ai-chatbot-icon">
        <div className="ai-icon-circle">
          <span className="ai-icon">🤖</span>
        </div>
      </div>

      <div className="login-content">
        {/* Left Panel - Form */}
        <div className={`form-panel ${isLoginMode ? 'login-mode' : 'register-mode'}`}>
          <div className="form-container">
            <h1 className="form-title">
              {isLoginMode ? 'LOGIN' : 'REGISTER'}
            </h1>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLoginMode && (
                <>
                  <div className="form-group">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </>
              )}

              <div className="form-group">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              {!isLoginMode && (
                <div className="form-group">
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              )}

              <Button 
                type="submit" 
                className="submit-button"
              >
                {isLoginMode ? 'Login' : 'Register'}
              </Button>

              <button
                type="button"
                onClick={toggleMode}
                className="toggle-mode-button"
              >
                {isLoginMode ? 'New User? Register' : 'Already have an account? Login'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Panel - Illustration */}
        <div className="illustration-panel">
          <div className="illustration-content">
            <div className="mobile-device">
              <div className="screen">
                <div className="chat-bubble chat-bubble-1">
                  <div className="user-avatar user-1"></div>
                  <div className="message-content"></div>
                </div>
                <div className="chat-bubble chat-bubble-2">
                  <div className="user-avatar user-2"></div>
                  <div className="message-content"></div>
                </div>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-document"></div>
              <div className="floating-plant"></div>
              <div className="floating-hand"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;