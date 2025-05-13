import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Meal from './pages/Meal';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin'
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Contacts from './pages/Contacts';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/meal/:id' element={<Meal/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='*' element={<Contacts/>} />
        <Route path='/admin' element={
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;