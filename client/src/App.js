import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Mortgage from './pages/Mortgage/Mortgage';
import ViewHomes from './pages/ViewHomes/ViewHomes';
import House from './pages/House/House';

function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/mortgage' element={<Mortgage />} />
          <Route path='/view-homes' element={<ViewHomes />} />
          <Route path='/house/:id' element={<House />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
