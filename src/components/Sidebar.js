import React from 'react'
import './Sidebar.css'
import image from '../image.png'

export default function Sidebar() {

      return (
            <div className="sidebar">
                  {/** <img src={image}/>*/}

                  <a href="#Home">
                        1. Home
                  </a>
                  <a href="#AboutMe">
                        2. About
                  </a>
                  <a href="#Experience">
                        3. Experience
                  </a>
                  <a href="#Contact">
                        4. Contact
                  </a>
                  {/** <ul className='social'>
               <AiIcons.AiFillGithub style={{ fontSize: 30, paddingRight:"10px" }} /> 
               <AiIcons.AiFillLinkedin style={{ fontSize: 30, paddingRight:"10px" }} />
               <AiIcons.AiFillInstagram style={{ fontSize: 30, paddingRight:"10px" }} />
              </ul> */}
            </div>

      )
}


