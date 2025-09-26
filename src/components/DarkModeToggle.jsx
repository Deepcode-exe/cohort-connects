import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button 
      className={`dark-mode-toggle-btn ${isDarkMode ? 'dark' : ''}`}
      onClick={onToggle}
      aria-label="Toggle dark mode"
    >
      <div className="toggle-icon">
        {isDarkMode ? (
          <span className="sun-icon">☀️</span>
        ) : (
          <span className="moon-icon">🌙</span>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;