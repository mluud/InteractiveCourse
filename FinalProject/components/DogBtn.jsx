import { useNavigate } from 'react-router-dom';
import './DogBtn.css';

function DogBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dogs-to-adopt');
  };

  return (
    <div>
      <button className='dogAdoptionButton' onClick={handleClick}>
        Adopt a dog!<br />
        <img src="./images/mainpagedogicon.jpeg" id="dogImg" alt="Dog Icon" />
      </button>
    </div>
  );
}

export default DogBtn;
