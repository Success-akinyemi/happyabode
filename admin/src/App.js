
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NewHouse from './Components/NewHouse/NewHouse';
import Sidebar from './Components/Sidebar/Sidebar';
import ViewHouses from './Components/ViewHouses/ViewHouses';
import EditHouse from './Components/EditHouse/EditHouse';
import NewUser from './Components/NewUser/NewUser';
import { useSelector } from 'react-redux';
//import Login from './Components/Login/Login';


function App() {
  //const user = false

  //const persistData = JSON.parse(localStorage.getItem('persist:root'));
  //const userReducerData = JSON.parse(persistData.userReducer);
  //const email = userReducerData.currentUser.email;

  const currentUser = useSelector(state => state.userReducer.currentUser)
  console.log(currentUser)

  return (
    <div className="app">
      <BrowserRouter>
        {currentUser && <Sidebar />}
        <Routes>
          {!currentUser ? <Route path="/login" element={<Login />} /> : <Route path="/" element={<ViewHouses />} />}
          {currentUser ? (
            <>
              <Route path="/" element={<ViewHouses />} />
              <Route path="/newHouse" element={<NewHouse />} />
              <Route path="/editHouse/:id" element={<EditHouse />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          ) : (
            <Route path="/*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
