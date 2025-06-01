import './DogProfile.css'

function DogProfile({onClick }){
      
      return (
        <div>
        <div id="picAndMainDogInfo">
            <img id="profImg" src="./images/australianshephard.jpeg" alt="dogProfImg" />
            <div id="mainDogInfo">
                <p id="dogName">Elsie</p>
                <p id="dogBreed">australian shephard</p>
            </div>
        </div>
        <div id="dogDetails">
            <p id="dogDetailsTitle">Details:</p>
            <p>18-27 kg</p>
            <p>45-60 cm</p>
            <div id="dogTagList">
                <p class="dogTags">intelligent</p>
                <p class="dogTags">affectionate</p>
                <p class="dogTags">active</p>
            </div>
        </div>
        <button onClick={onClick}>ADOPT</button>
        </div>
      );
  }

  export default DogProfile