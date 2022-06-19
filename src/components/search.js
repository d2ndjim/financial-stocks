import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from '../redux/search/searchSlice';
import './search.css';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search Company"
      />
    </div>
  );
};

export default Search;
