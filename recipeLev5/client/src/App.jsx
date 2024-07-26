import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import SubmitRecipe from "./components/UserRecipes"

import UserProfile from "./components/UserProfile";
import AllRecipes from "./components/AllRecipes";
import SearchByCategory from "./components/SearchByCategory"
import Auth from './components/Auth';

import NavBar from "./components/NavBar";

import { UserContext } from './context/UserProvider';


export default function App() {
  const {token, logout} = useContext(UserContext)

  // const [recipes, setRecipes] = useState([])

  //   function getRecipes(){
  //       axios.get("/api/recipes")
  //       .then(res => setRecipes(res.data))
  //       .catch(err => console.log(err.response.data.errMsg))
  //   }
  //   useEffect(() => {
  //     getRecipes()
  // }, [])

  // function addRecipe(newRecipe){
  //   axios.post('/api/recipes', newRecipe)
  //   .then(res => setRecipes(prevRecipes => [...prevRecipes, res.data]))
  //   .catch(err => console.log(err))
  // }

    return (
    <>
      <Router>
      {token && <NavBar logout = {logout}/>}

        <Routes>
          <Route path='/' element={token ? <Navigate to ="/profile"/> : <Auth />}/>  
          <Route path='/about' element={<About />}/>
          <Route path='/profile' element={<UserProfile />}/>
          
          <Route path="/allRecipes" element={<AllRecipes />}/>
          <Route path='/searchByCategory' element={<SearchByCategory />}/>
       
          <Route path= "/submitRecipe" element={<SubmitRecipe />}/>
          {/* <Route path="/nav" element={<NavBar />}/> */}
          
        </Routes>
        </Router>
      </>
    );
}

