import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`text-center py-4 mt-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
    >
      <div className="container">
        <h5>📰 React News App</h5>
        <p>
          This project fetches live news using the NewsAPI and showcases them using React.
        </p>
        <p>
          Developed by <strong>Rishil Aman</strong>
        </p>
        <div>
          <a
            href="mailto:rishil9470@gmail.com"  style={{ textDecoration: 'none', color: 'inherit' }}
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/Rishilaman"  style={{ textDecoration: 'none', color: 'inherit' }}
            className="me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rishil-aman-712173229/"  style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
