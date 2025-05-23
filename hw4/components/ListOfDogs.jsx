import './ListOfDogs.css'

const dogs = [
    { name: 'Bella', id: 1, breed: 'dachsund', img:"./images/dachsund.png"},
    { name: 'Bessie', id: 2, breed: 'border collie', img:"./images/bordercollie.jpeg"},
    { name: 'Elsie', id: 3, breed: 'australian shephard', img:"./images/australianshephard.jpeg"},
  ];

function ListOfDogs({onClick }){
    const dogListItems = dogs.map(dog =>
      <button className="dogProfileBtn" onClick={onClick}>
        <li key={dog.id}>
          <img className="dogIcon" src={dog.img}></img>
          My name is {dog.name} and my breed is {dog.breed}
        </li>
      </button>
      );
      
      return (
        <div>
        <ul id="dogList">{dogListItems}</ul> 
        </div>
      );
  }

  
  export default ListOfDogs