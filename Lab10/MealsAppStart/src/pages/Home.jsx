import Search from "../components/Search";
import Favorites from "../components/Favorites";
import MealCard from "../components/MealCard";
import { useEffect, useState } from "react";

const RANDOM_API = import.meta.env.VITE_RANDOM_MEAL_API;
const MEAL_BYID_API = import.meta.env.VITE_MEAL_BYID_API;
const SEARCH_API = import.meta.env.VITE_SEARCH_MEAL_API;

const Home = () => {
  const meals = () => {
    const list = [];
    for (var key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        list.push(JSON.parse(localStorage[key]));
      }
    }
    return list;
  }
  const mealsIds = () => {
    const list = [];
    for (var key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        list.push(key);
      }
    }
    return list;
  }
  const [randomMeal, setRandomMeal] = useState(null);
  const [favoriteMeals, setFavoriteMeals] = useState(meals);
  const [favoriteMealIds, setFavoriteMealIds] = useState(mealsIds);
  const [searchResults, setSearchResults] = useState([]); 

  useEffect(() => {
    loadRandomMeal();
  }, []);


  const loadRandomMeal = async () => {
    const resp = await fetch(RANDOM_API);
    const data = await resp.json();
    let meal = data.meals[0];
    setRandomMeal(meal);
  }

  const getMealById = async (id) => {
    const resp = await fetch(MEAL_BYID_API + id);
    const data = await resp.json();
    let meal = data.meals[0];
    return meal;
  }

  const handleSearch = async (term) => {
    try {
      const resp = await fetch(SEARCH_API + term);
      const data = await resp.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error("Search failed:", error);
    }};


    function addFavorite(meal){
      if(favoriteMeals.includes(meal)){
        setFavoriteMeals(favoriteMeals.filter(a => a.idMeal !== meal.idMeal));
        setFavoriteMealIds(favoriteMealIds.filter(a => a !== meal.idMeal));
        localStorage.removeItem(meal.idMeal);
      }else{
        setFavoriteMeals([...favoriteMeals,meal]);
        setFavoriteMealIds([...favoriteMealIds,meal.idMeal]);
        localStorage.setItem(meal.idMeal,JSON.stringify(meal));
      }
    }

    function removeFromId(idMealToRemove){
      setFavoriteMeals(favoriteMeals.filter(a => a.idMeal !== idMealToRemove));
      setFavoriteMealIds(favoriteMealIds.filter(a => a !== idMealToRemove));
      localStorage.removeItem(idMealToRemove);
    }

    return (
      <div className="store">
        <Search onSearch={handleSearch} />            
  
        <Favorites favoriteMeals={favoriteMeals} onRemoveFavoriteClick={removeFromId}/> 
  
        <div className="meals" id="meals">
          {searchResults.length > 0 ? (               
            searchResults.map((meal) => (             
              <MealCard key={meal.idMeal}  mealData={meal} onFavoriteClick={() => addFavorite(meal)}/> 
            ))
          ) : (
            randomMeal && <MealCard mealData={randomMeal} isRandom={true} onFavoriteClick={() => addFavorite(randomMeal)}/>
          )}
        </div>
      </div>
    );
  };

  

export default Home
