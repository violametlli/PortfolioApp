import React, { Fragment } from 'react'
import './AboutMe.css'
import Area from '../components/Area'
import profile from '../profile.jpeg'

function AboutMe() {

  return (
    <div id='AboutMe' className='flex-container'>
      <div className='flex-child first'>
        <p> <h1>Me Myself and I</h1>
          Lorem ipsum dolor sit amet,   Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,   Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,
          Lorem ipsum dolor sit amet,

          JavaScript (ES6+)
          TypeScript
          React
          Eleventy
          Node.js
          WordPress
        </p>  </div>
      <div className='flex-child second'>
        <div className='style'>
          <img src={profile} className='profile' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe