import React, { useState, useEffect, useContext } from 'react';
import './ListOfDogs.css';
import { FavoritesContext } from '../src/FavoritesContext';

function ListOfDogs({ onClick }) {
  const [dogs, setDogs] = useState([]);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const dogNames = [
      'Bella', 'Max', 'Charlie', 'Luna', 'Rocky', 'Lucy', 'Cooper',
      'Daisy', 'Buddy', 'Molly', 'Tucker', 'Sadie', 'Bear', 'Chloe',
      'Duke', 'Lily', 'Jack', 'Sophie', 'Oliver', 'Zoe', 'Bentley'
    ];

    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        const selectedBreeds = [];

        while (selectedBreeds.length < 21) {
          const randomIndex = Math.floor(Math.random() * breeds.length);
          const breed = breeds[randomIndex];
          if (!selectedBreeds.includes(breed)) {
            selectedBreeds.push(breed);
          }
        }

        Promise.all(
          selectedBreeds.map((breed, index) =>
            fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
              .then((res) => res.json())
              .then((imageData) => ({
                id: breed,
                name: dogNames[index],
                breed: breed,
                img: imageData.message,
              }))
          )
        ).then((dogData) => setDogs(dogData));
      })
      .catch((error) => {
        console.error('Error fetching dog data:', error);
      });
  }, []);

  return (
    <div>
      <ul id="dogList">
        {dogs.map((dog) => (
          <li key={dog.id}>
            <button className="dogProfileBtn" onClick={onClick}>
              <img className="dogIcon" src={dog.img} alt={dog.breed} />
              <p>{dog.name}</p>
              <p>{dog.breed}</p>
              <button onClick={() => toggleFavorite(dog)}>
                {favorites.some((fav) => fav.id === dog.id) ? '★' : '☆'}
              </button>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfDogs;