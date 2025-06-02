import React, { useState, useEffect, useContext } from 'react';
import './ListOfDogs.css';
import { FavoritesContext } from '../src/FavoritesContext';

function ListOfDogs({ searchTerm }) {
  const [dogs, setDogs] = useState([]);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const dogApiUrl = import.meta.env.VITE_DOG_API_URL;

  useEffect(() => {
    const dogNames = [
      'Bella', 'Max', 'Charlie', 'Luna', 'Rocky', 'Lucy', 'Cooper',
      'Daisy', 'Buddy', 'Molly', 'Tucker', 'Sadie', 'Bear', 'Chloe',
      'Duke', 'Lily', 'Jack', 'Sophie', 'Oliver', 'Zoe', 'Bentley'
    ];

    fetch(dogApiUrl)
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

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dog.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul id="dogList">
        {filteredDogs.map((dog) => (
          <li key={dog.id}>
            <button className="dogProfileBtn">
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