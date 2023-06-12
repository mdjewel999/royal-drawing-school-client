import  { useState, useEffect } from 'react';
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user's preference is already set
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(userPrefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the CSS variables when the theme changes
    const root = document.documentElement;
    root.style.setProperty('--bg-color', isDarkMode ? '#1f1f1f' : '#ffffff');
    root.style.setProperty('--text-color', isDarkMode ? '#ffffff' : '#000000');
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
