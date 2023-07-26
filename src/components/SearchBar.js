import React from 'react';

function SearchBar({ placeholder }) {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder={placeholder} className="search-bar" />
    </div>
  );
}

export default SearchBar;
