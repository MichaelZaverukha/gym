import React, { useState } from 'react'
import logo from '../images/41cd04d7d89f5e536a2f9bce8455751b.png'
import {Link} from "react-scroll"

export default function Navbar() {
   const[nav,setNav] = useState (false);
   const Changebackground = () => {
      if (window.scrollY >= 50){
         setNav(true)
      }else{
         setNav(false)
      }
   }

   window.addEventListener('scroll', Changebackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
         <img src={logo} alt=''/>
      </Link> 
      <input className='menu-btn' type='checkbox' id='menu-btn'></input>
      <label className='menu-icon' htmlFor='menu-btn'>
         <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
         <li>
            <Link to='main' smooth={true} duration={1000}>Home</Link>
         </li>
         <li>
            <Link to='feature' smooth={true} duration={1000}>Features</Link>
         </li>
         <li>
            <Link to='offer' smooth={true} duration={1000}>Offer</Link>
         </li>
         <li>
            <Link to='about' smooth={true} duration={1000}>About</Link>
         </li>
         <li>
            <Link to='contact' smooth={true} duration={1000}>Contact</Link>
         </li>
      </ul>
    </nav>
  )
}
