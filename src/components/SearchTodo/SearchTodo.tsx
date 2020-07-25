import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './SearchTodo.scss'

import { debounce } from '../../helpers/debounce';
import { setSearchQuery } from '../../store/search';

export const SearchTodo = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearchInput = useCallback(debounce((value: string) => {
    dispatch(setSearchQuery(value));
  }, 500), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchInput(e.currentTarget.value);
    setQuery(e.currentTarget.value);
  }

  const handleInputReset = () => {
    handleSearchInput('');
    setQuery('');
  }

  return (
    <div className="todo__search search">
      <input
        className="search__input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter task name for search..."
      />
      {query.length > 0 && (
        <button
          className="search__reset"
          type="button"
          onClick={handleInputReset}
        >
        </button>
      )}
    </div>
  );
}
