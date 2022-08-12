import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact"
import "./App.css"


 function App() {
 

  return <div className="App">
  
  
  <Router>
  <div className="navi">
  <NavBar/>
  </div>
  <div className="sections">
  <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/AboutMe' exact element={<AboutMe/>}/>
      <Route path='/Experience' exact element={<Experience/>}/>
      <Route path='/Contact' exact element={<Contact/>}/>
      
  </Routes>
  </div>
  </Router>
  
  </div> ;
}
export default App