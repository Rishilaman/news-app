import React from 'react';

const NewsItem = ({ title, description, src, url, isDarkMode }) => {
  return (
    <div
      className={`card m-2 ${isDarkMode ? 'bg-dark text-light' : ''}`}
      style={{ maxWidth: '345px' }}
    >
      <img
        src={src || 'https://via.placeholder.com/345x180?text=No+Image'}
        className="card-img-top"
        alt={title || 'News'}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{title || 'Untitled'}</h5>
        <p className="card-text">{description || 'No description available.'}</p>
        <a
          href={url}
          className={`btn ${isDarkMode ? 'btn-light' : 'btn-primary'}`}
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
