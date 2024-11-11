import React from 'react'
import './work.css'
import port2 from '../../assets/port1.png'
import port3 from '../../assets/port3.png'
import port4 from '../../assets/port4.png'
import port5 from '../../assets/port5.png'
import port6 from '../../assets/port6.png'
import port7 from '../../assets/port7.png'
const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">Designed and developed a responsive [website/application] using HTML5, CSS3, and JavaScript, focusing on delivering an exceptional user experience. </span>
    <div className="worksImgs">
    <img src={port2} alt="" className="worksImg" />   
    <img src={port3} alt="" className="worksImg" />   
    <img src={port4} alt="" className="worksImg" />   
    <img src={port5} alt="" className="worksImg" />   
    <img src={port6} alt="" className="worksImg" />   
    <img src={port7} alt="" className="worksImg" />   
    </div>
    <button className="workBtn">See More</button>
    </section>
  )
}

export default Works