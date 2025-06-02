import React, { useContext } from 'react';
import './FavouritesSidebar.css';
import { FavoritesContext } from '../src/FavoritesContext';
import { useToggle } from 'usehooks-ts';

function FavouritesSidebar() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [isVisible, toggleVisibility] = useToggle(true);

  return (
    <div>
      <button className="showHideFaves"
       onClick={toggleVisibility}>
        {isVisible ? 'Hide Favorites' : 'Show Favorites'}
      </button>

      {isVisible && (
        <div className="favoritesSidebar">
          <h2>Favorites</h2>
          {favorites.length === 0 ? (
            <p>No favorites yet.</p>
          ) : (
            <ul>
              {favorites.map((dog) => (
                <li key={dog.id}>
                  <div className="favouriteDogs">
                    <img src={dog.img} alt={dog.name} />
                    <p>{dog.name}</p>
                    <button className="removeFaveDog"
                    onClick={() => toggleFavorite(dog)}>x</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default FavouritesSidebar;