import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogBtn from '../components/DogBtn'
import ListOfDogs from '../components/ListOfDogs'
import DogProfile from '../components/DogProfile'
import ContactOwner from '../components/ContactOwner'
import SendMsg from '../components/SendMsg'

const DOG_BTN_PAGE = 0
const DOG_LIST_PAGE = 1
const DOG_PROFIL_PAGE = 2
const DOG_CONTACT_PAGE = 3
const DOG_OWNER_MSG_PAGE = 4

function App() {
  let content;
  let [dogPageValue, setDogPageValue] = useState(0);

  function dogBtnHandleClick(){
    console.log(dogPageValue);
    setDogPageValue(DOG_LIST_PAGE);
  }
  function dogListHandleClick(){
    console.log(dogPageValue);
    setDogPageValue(DOG_PROFIL_PAGE);
  }
  function dogProfilHandleClick(){
    console.log(dogPageValue);
    setDogPageValue(DOG_CONTACT_PAGE);
  }
  function dogContactOfDogHandleClick(){
    setDogPageValue(DOG_OWNER_MSG_PAGE);
  }
  function dogOwnerMsgHandleClick(){
    setDogPageValue(DOG_BTN_PAGE);
  }
    switch (dogPageValue) {
      case DOG_BTN_PAGE:
        content = <DogBtn onClick={dogBtnHandleClick} />
        break;
  
      case DOG_LIST_PAGE:
        content = <ListOfDogs onClick={dogListHandleClick} />
        break;
      
      case DOG_PROFIL_PAGE:
        content = <DogProfile onClick={dogProfilHandleClick} />
        break;

      case DOG_CONTACT_PAGE:
        content = <ContactOwner onClick={dogContactOfDogHandleClick} />
        break;

      case DOG_OWNER_MSG_PAGE:
        content = <SendMsg onClick={dogOwnerMsgHandleClick} />
        break;
  
      default:
        console.log(`error`);
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
