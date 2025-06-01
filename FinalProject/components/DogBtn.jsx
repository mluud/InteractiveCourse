import './DogBtn.css'

function DogBtn({ onClick }){
    
    return (
      <div>
        <button className='dogAdoptionButton' onClick={onClick}>
             Adopt a dog!<br></br>
             <img src="./images/mainpagedogicon.jpeg" id="dogImg"></img>
        </button>
      </div>
    )
  }
  
  export default DogBtn
