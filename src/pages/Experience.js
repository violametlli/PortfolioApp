import React from 'react'
import {AiOutlineShoppingCart } from 'react-icons/ai';
import{TiWeatherCloudy} from 'react-icons/ti'
import {BsCreditCard} from 'react-icons/bs'
import Timeline from '../components/Timeline'
import './Experience.css'
import Project from '../components/Project'
 
function Experience() {
  return (
    <div id="Experience" className='exp'><Timeline/>
     <h2>Meanwhile some of my projects...</h2>
   <div className='blocks'>
   <Project src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XNsKOv4XlatsIuxkxP-CKUiTw1DZjhd-jpyOprecLSNmL6mefmsYyxKo2hatK150HKs&usqp=CAU'  title="Ecommerce"
   icon={<AiOutlineShoppingCart onClick={()=>window.open('https://github.com/violametlli/portfolio','_blank')}/>} description="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."/>
    <Project src='https://i.pinimg.com/736x/dc/ce/fb/dccefb789699a764dcfcf26b4394d264--app-icon-icon-design.jpg'  title="Weather app"
  icon={<TiWeatherCloudy onClick={()=>window.open('https://github.com/violametlli/portfolio','_blank')}/>} description="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."/>
    <Project src='https://cdn.dribbble.com/users/5031392/screenshots/12917678/media/e9844867632cc5d322dd36ac5d5a6341.png?compress=1&resize=400x300'  title="Expense app"
 icon={<BsCreditCard onClick={()=>window.open('https://github.com/violametlli/portfolio','_blank')}/>}  description="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."/>
    </div> 
    </div>
  )
}

export default Experience