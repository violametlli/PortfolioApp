import React,{Fragment} from 'react'
import './AboutMe.css'
import Area from '../components/Area'



function AboutMe() {
  
  return (
    <div id='AboutMe' className='flex-container'>
    <div className='flex-child first'>
  <p> <h1>Me Myself and I</h1>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a sodales ex, eget pellentesque lacus. Mauris rutrum et est vitae tincidunt. Aenean ornare tempor ligula, at vulputate diam malesuada a. Phasellus faucibus sit amet neque quis tincidunt. Donec non iaculis nunc, in gravida diam. Sed tincidunt libero quis velit facilisis, a ultricies felis convallis. Nullam viverra diam ut elit porttitor, quis dapibus sem scelerisque. Morbi et justo quam. Pellentesque hendrerit lectus ut ligula imperdiet pharetra. Mauris malesuada rhoncus metus id blandit. Quisque posuere ornare lectus. Ut felis lectus, tincidunt in molestie ut, luctus sit amet orci. Mauris vel arcu ac metus fringilla feugiat. Integer venenatis elit vel cursus porta. Cras viverra ultricies sagittis. In facilisis diam ac enim aliquet, id mattis ipsum commodo.


  
  JavaScript (ES6+)
  TypeScript
  React
  Eleventy
  Node.js
  WordPress
  
     </p>  </div>
     
    <div className='flex-child second'>
    <h1>Areas of interest</h1>
    <div className='style'>
    <Area/>
     </div>
    
    </div>

    </div>
  )
}

export default AboutMe