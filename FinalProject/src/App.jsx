import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogBtn from '../components/DogBtn'
import ListOfDogs from '../components/ListOfDogs'
import ContactOwner from '../components/ContactOwner'
import Navbar from '../components/Navbar';
import DogsToAdopt from '../pages/DogsToAdopt';
import Kennels from '../pages/Kennels';
import LogIn from '../pages/LogIn';
import NotFound from '../pages/NotFound'; 
import Home from '../pages/Home'; 
import { FavoritesProvider } from './FavoritesContext';
import KennelCard from '../components/KennelCard';


function App() {

  return (
    <div>
      <FavoritesProvider>
        <Router>
        <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path="/dogs-to-adopt" element={<DogsToAdopt />} />
              <Route path="/kennels" element={<Kennels />}>
                <Route path="card" element={<KennelCard />} />
                <Route path="contact" element={<ContactOwner />} />
              </Route>
              <Route path="/login" element={<LogIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
           </Router>
           </FavoritesProvider>
    </div>
  )
}

export default App
