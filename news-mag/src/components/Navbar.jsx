import React from 'react';

const Navbar = ({ isDarkMode, toggleDarkMode, searchQuery, setSearchQuery }) => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: isDarkMode ? '#212529' : '#343a40' }}
    >
      <div className="container-fluid">
       <a className="navbar-brand d-flex align-items-center fw-bold fs-4" href="#">
  📰 <span style={{ color: '#dc3545', marginLeft: '0.4rem' }}>Daily</span>
  <span style={{ color: '#0d6efd', marginLeft: '0.2rem' }}>News</span>
</a>


        {/* Search Input */}
        <form className="d-flex ms-auto me-3" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search News"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Dark Mode Toggle */}
        <div className="form-check form-switch text-white">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            id="darkModeToggle"
          />
          <label className="form-check-label" htmlFor="darkModeToggle">
            {isDarkMode ? 'Dark' : 'Light'}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
