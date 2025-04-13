function DogProfile({onClick }){
      
      return (
        <div>
        <img src="" alt="IMG" />
        <p>NAME</p>
        <p>BREED</p>
        <p>WEIGHT</p>
        <p>HEIGHT</p>
        <p>TEMPERAMENT</p>
        <button onClick={onClick}>ADOPT</button>
        </div>
      );
  }

  export default DogProfile