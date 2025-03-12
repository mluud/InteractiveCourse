import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogBtn from '../components/DogBtn'
import ListOfDogs from '../components/ListOfDogs'

function App() {
  let content;
  let [flagDogList, setflagDogList] = useState(false);

  function handleClick() {
    console.log(flagDogList);
    setflagDogList(!flagDogList);
  }

  if (flagDogList){
    content = <DogBtn flagDogList={flagDogList} onClick={handleClick} />
  }else{
    content = <ListOfDogs flagDogList={flagDogList} onClick={handleClick} />
  }

  return (
    <div>
        <h1>woof</h1>
        <p>What do you want to do?</p>
        {content}
    </div>
  )
}

export default App
