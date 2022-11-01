import React from 'react'
import './Home.css'
import './AboutMe.css'
import Letter from"./Letter"
import  profile from '../profile.jpeg'


function Home() {
  const lettersNje = ["H", "i", "i"];
  const lettersDy=["I'", "m", "    ","V", "i","o","l","a,"] ;
  const lettersTre=["W","e","b","     ","D","e","v","e","l","o","p","e","r..."];
  return (
    <div id ="Home"  >
   
    <div className='home'>
      <div className='one'>
        {lettersNje.map((letterr, i) => (
          <Letter key={i}>{letterr}</Letter>
        ))}
      </div>
          <div className='two'>
            {lettersDy.map((letterr, i) => (
              <Letter key={i}>{letterr}</Letter>
            ))}
            </div>
     <div className='three'>
        {lettersTre.map((letterr, i) => (
          <Letter key={i}>{letterr}</Letter>
        ))}</div>
        <div><button  className="homebtn">Contact Me</button></div>

        </div>

    {/**    <div className='flex-child second'>
        <img src={profile} className='profile'/>
        </div> */}
        <div className='layla'>   Layla, im begging darling please...</div>

    </div>
   
  )
}

export default Home