import React, { Fragment } from 'react'
import './AboutMe.css'
import Area from '../components/Area'
import profile from '../profile.jpeg'

function AboutMe() {

  return (
    <div id='AboutMe' className='flex-container'>
      <div className='flex-child first'>
        <h1>Me Myself and I</h1>
        <p className='description'> I am a 23yo girl who likes to learn new thing and develop new skills.
         Its been two years now that im working on Analytics (PowerBI and SQL more specifically) and i love it. Playing with the data until you get the result you want has been one of the things that has kept me stuck with what I'm working with.
         In the past i have tried to dig a little in porgramming side where i used to work with JS libraries like React (this portfolio is also made using it) and also a bit of CRM platforms such as Salesforce.
        </p><p className='description2'>
         Apart from being a data analyst, I'm just a shy girl who likes to read books, watch movies, travel, go out with my friends, play tennis and generally trying to push myself to try new things (being extrovert itsnt part of this :)
        </p>
        </div>
      <div className='flex-child second'>
        <div className='style'>
          <img src={profile} className='profile' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe