import ListOfDogs from "../components/ListOfDogs";
import FavouritesSidebar from '../components/FavouritesSidebar';
import './DogsToAdopt.css'

function DogsToAdopt(){
   
    return (
      <div>
        <h1>View all the dogs:</h1>
        <div className="dogsPageLayout">
          <ListOfDogs/>
          <FavouritesSidebar />
        </div>
      </div>
    );
}


export default DogsToAdopt