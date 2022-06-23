import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from 'react-icons/io';
import { Link } from "react-router-dom"
import  image from '../image.png'
import './NavBar.css'
import { IconContext } from 'react-icons/lib';

function Navbar() {
   //deklaron matricen
   const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'About me',
      path: '/SideBarData',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Experiences',
      path: '/Experiences',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Contact',
      path: '/Contact',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    }]

    return (
        <div>
          <IconContext.Provider value={{ color: '#b2a9a9' }}>
            <nav className='nav'>     
            <ul>
            <li><img src={image}/>
            </li>
          </ul>
          <ul>
                    {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
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