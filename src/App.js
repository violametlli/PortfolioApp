import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home';


 function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <div>
  {loading ?  <img src="https://wallpaperaccess.com/full/127699.jpg"
  alt="react-icon"/> :
  
  <div className="App">
  <Router>
  <NavBar/>
  <Routes>
      <Route path='/' exact element={<Home/>}/>
  </Routes>
  </Router>
  
  </div> }</div>;
}
export default App