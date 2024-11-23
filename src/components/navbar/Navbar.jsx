import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import Contact from '../../assets/image3.png';
import {Link, link} from 'react-scroll'
import { HambergerMenu } from 'iconsax-react';
const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false)
  return (
    <nav className="navbar">
        <img className='img' src={logo} alt="logo" />
   <div className="desktopMenu">
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
<Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Clients</Link>
    </div>
    <button className="desktopMenuBtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
        <img src={Contact} alt="" className='desktopMenuImg'/> Contact Me </button>
    <HambergerMenu className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
   <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>About</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
<Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Clients</Link>
<Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Contact</Link>
   
   </div>

    </nav>
      )
}

export default Navbar