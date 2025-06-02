import React, { useState } from 'react';
import ListOfDogs from "../components/ListOfDogs";
import FavouritesSidebar from '../components/FavouritesSidebar';
import './DogsToAdopt.css';

function DogsToAdopt() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>View all the dogs:</h1>
      <div className="dogSearchBar">
        <input
          type="text"
          placeholder="Search.."
          className="searchInput"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="searchIcon">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="dogsPageLayout">
        <ListOfDogs searchTerm={searchTerm} />
        <FavouritesSidebar />
      </div>
    </div>
  );
}

export default DogsToAdopt;