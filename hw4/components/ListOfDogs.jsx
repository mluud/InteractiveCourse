import './ListOfDogs.css'

const dogs = [
    { name: 'Bella', id: 1, breed: 'dachsund', img:"https://animalcarecentersmyrna.com/wp-content/uploads/2021/08/Untitled-design-2021-08-19T162152.857.png"},
    { name: 'Bessie', id: 2, breed: 'border collie', img:"https://animalcarecentersmyrna.com/wp-content/uploads/2021/08/Untitled-design-2021-08-19T162152.857.png"},
    { name: 'Elsie', id: 3, breed: 'australian shephard', img:"https://animalcarecentersmyrna.com/wp-content/uploads/2021/08/Untitled-design-2021-08-19T162152.857.png"},
  ];

function ListOfDogs({ flagDogList, onClick }){
    const dogListItems = dogs.map(dog =>
        <li key={dog.id}>
          <img className="dogIcon" src={dog.img}></img>
          My name is {dog.name} and my breed is {dog.breed}
        </li>
      );
      
      return (
        <div>
        <ul>{dogListItems}</ul>
        <button  onClick={onClick}>I changed my mind...</button>  
        </div>
      );
  }

  
  export default ListOfDogs