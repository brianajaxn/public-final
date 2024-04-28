import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
      <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search by title" style={{ marginRight: '8px'}}/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
