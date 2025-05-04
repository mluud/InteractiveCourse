import Search from "../components/Search";
import Favorites from "../components/Favorites";
import MealCard from "../components/MealCard";
import { useEffect, useState } from "react";

const RANDOM_API = import.meta.env.VITE_RANDOM_MEAL_API;
const MEAL_BYID_API = import.meta.env.VITE_MEAL_BYID_API;
const SEARCH_API = import.meta.env.VITE_SEARCH_MEAL_API;

const Home = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const [searchResults, setSearchResults] = useState([]); 
  //console.log(RANDOM_API)

  useEffect(() => {
    loadRandomMeal();
  },[])

  const loadRandomMeal = async () => {
    const resp = await fetch(RANDOM_API);
    const data = await resp.json();
    let meal = data.meals[0];
    console.log(meal);
    setRandomMeal(meal);
  }

  const getMealById = async (id) => {
    const resp = await fetch(MEAL_BYID_API + id);
    const data = await resp.json();
    let meal = data.meals[0];
    //console.log(meal);
    return meal;
  }

  const handleSearch = async (term) => {
    try {
      const resp = await fetch(SEARCH_API + term);
      const data = await resp.json();
      setSearchResults(data.meals || []); // Empty array if no results
    } catch (error) {
      console.error("Search failed:", error);
    }};

  
    return (
      <div className="store">
        <Search onSearch={handleSearch} />            {/* ✅ CHANGED: added prop */}
  
        <Favorites favoriteMeals={favoriteMeals} />
  
        <div className="meals" id="meals">
          {searchResults.length > 0 ? (               
            searchResults.map((meal) => (             
              <MealCard key={meal.idMeal} mealData={meal} /> 
            ))
          ) : (
            randomMeal && <MealCard mealData={randomMeal} isRandom={true} />
          )}
        </div>
      </div>
    );
  };

export default Home
