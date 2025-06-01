import React, { useContext } from 'react';
import './FavouritesSidebar.css';
import { FavoritesContext } from '../src/FavoritesContext';

function FavouritesSidebar() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="favoritesSidebar">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((dog) => (
          <div className="favouriteDogs" key={dog.id}>
            <li>
              <img src={dog.img} alt={dog.name} />
              <p>{dog.name}</p>
              <button onClick={() => toggleFavorite(dog)}>x</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FavouritesSidebar;