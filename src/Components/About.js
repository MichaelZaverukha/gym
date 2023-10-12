import React from 'react'
import aboutPhoto from '../images/group-of-people-exercising-with-dumbbells-in-the-fitness-club-or-gym_613910-18611.avif'

export default function About() {
  return (
    <div id='about'>
      <div className='about-image'>
         <img src={aboutPhoto} alt=''/>
      </div>
      <div className='about-text'>
         <h2>LEARN MORE ABOUT US</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <button>READ MORE</button>
      </div>
    </div>
  )
}
