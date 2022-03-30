import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import './Searchbar.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Add movie name');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className="SearchForm-input"
          name="movieName"
          value={query}
          onChange={handleNameChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className="SearchForm-button">
          <ImSearch style={{ marginRight: 8 }} />
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </div>
  );
}
