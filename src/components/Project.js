 import React from 'react'
 import Card from './Card'
 import './Project.css'

 
 function Project(props) {
    return (
    <div className='container'>
      <div className="cart-image">
      <img src={props.src} /></div>
       {/**icon */}

       <div className="cart-content">
       <span className="cart-title">{props.title} <div className='icon'>{props.icon}</div></span>
       <p className="cart-description">{props.description}</p>
       </div>
       </div>

    )
  }
 
 export default Project