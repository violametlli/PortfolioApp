import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from 'react-icons/io';
import  image from '../image.png'
import './NavBar.css'
import { IconContext } from 'react-icons/lib';

function Navbar() {
   

    return (
        <div>
          <IconContext.Provider value={{ color: '#b2a9a9' }}>
            <nav className='nav'>     
            <ul className='logo'>
            <li><img src={image} />
            </li>
          </ul>
          <ul className='sidebar'>
          <a href="#home">
          <AiIcons.AiFillHome /> <span className='text'>Home</span> 
            </a>
            <a href="#AboutMe">
            <span className='text'>About </span> 
            </a>
            <a href="#Experience">
            <span className='text'>Experience</span> 
            </a>
            <a href="#Contact">
            <span className='text'>Contact</span>   
            </a>
              </ul>
              <ul className='social'>
               <AiIcons.AiFillGithub style={{ fontSize: 30, paddingRight:"10px" }} /> 
               <AiIcons.AiFillLinkedin style={{ fontSize: 30, paddingRight:"10px" }} />
               <AiIcons.AiFillInstagram style={{ fontSize: 30, paddingRight:"10px" }} />
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
      );
    }
    
    export default Navbar



    import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact"
import "./App.css"


 function App() {
 

  return <div className="app">
  
  <NavBar/>
 
  
  <div className="sections">
  
  <Home/>  
  <AboutMe/>
  <Experience/>
  <Contact/>
  
  </div>
  
  </div>
}
export default App