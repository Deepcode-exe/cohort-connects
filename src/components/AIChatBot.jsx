import React, { useState } from 'react';
import './AIChatBot.css';

const AIChatBot = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`ai-chatbot ${isDarkMode ? 'dark' : ''}`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <span className="ai-avatar">🤖</span>
              <span>AI Assistant</span>
            </div>
            <button 
              className="close-chat"
              onClick={toggleChat}
            >
              ✕
            </button>
          </div>
          <div className="chat-body">
            <div className="welcome-message">
              <div className="message ai-message">
                <span className="message-avatar">🤖</span>
                <div className="message-content">
                  <p>Hello! I'm your AI assistant. How can I help you today?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-input-container">
            <input 
              type="text" 
              placeholder="Type your message..."
              className="chat-input"
            />
            <button className="send-button">
              📤
            </button>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button 
        className="chat-toggle-btn"
        onClick={toggleChat}
        aria-label="Open AI Chat"
      >
        <div className="ai-icon-circle">
          <span className="ai-icon">🤖</span>
        </div>
        {!isOpen && (
          <div className="notification-dot">
            <span className="pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChatBot;