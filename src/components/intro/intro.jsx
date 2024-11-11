import React from 'react'
import './intro.css';
import {Link, link} from 'react-scroll'
import bg from '../../assets/me2.png'
import btnImg from '../../assets/imagep.png'
const Intro = () => {
  return (
    <section id='intro'> 
<div className="introContent">
<span className="hello">Hello</span>
<span className="introText">I'm <span className="introName">Divine</span><br />Website developer</span>
<p className="introPara">I am a skilled web developer with experience in creating <br /> visual website</p>
<Link><button className="btn"><img src={btnImg} alt="Hire me"  className='btnImg'/>Hire Me</button></Link>
</div>
<img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro