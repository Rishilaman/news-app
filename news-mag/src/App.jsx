import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import Footer from './components/Footer'; // ← Add this

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem('darkMode', !prev);
      return !prev;
    });
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main className="container mt-4">
        <NewsBoard isDarkMode={isDarkMode} searchQuery={searchQuery} />
      </main>
      <Footer isDarkMode={isDarkMode} /> {/* ← Add Footer here */}
    </>
  );
};

export default App;
