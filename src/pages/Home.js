import React from 'react'
import './Home.css'
import Letter from"./Letter"



function Home() {
  const lettersNje = ["H", "i", "i"];
  const lettersDy=["I'", "m", "    ","V", "i","o","l","a,"] ;
  const lettersTre=["W","e","b","     ","D","e","v","e","l","o","p","e","r..."];
  return (
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
  
      <div className='layla'>   Layla, im begging darling please...</div>
    </div>
  )
}

export default Home