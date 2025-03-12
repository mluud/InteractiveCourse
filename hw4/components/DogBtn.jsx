import './DogBtn.css'

function DogBtn({ flagDogList, onClick }){
    
    return (
      <div>
        <button className='dogAdoptionButton' onClick={onClick}>
             Adopt a dog!<br></br>
             <img src="./images/cutehappydog.webp" id="dogImg"></img>
        </button>
      </div>
    )
  }
  
  export default DogBtn
