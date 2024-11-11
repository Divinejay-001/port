import React from 'react'
import './skills.css'
import uiDesign from '../../assets/ui.png'
import webDesign from '../../assets/web.png'
import appDesign from '../../assets/app.png'
const Skills = () => {
  return (
    <section id='skills'>
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">I am a skiled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in Html, Css, and JavaScript, as well as design software suchas Adobe Photoshop and Illustrator. </span>
       <div className="skillBars">
        <div className="skillBar">
            <img src={uiDesign} alt="" className='skillBarImg' />
            <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>Its my passion to create mind blowing designs</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={webDesign} alt="" className='skillBarImg' />
            <div className="skillBarText">
            <h2>Website Design</h2>
            <p>Im a capable personnel with experience when it comes to web designs</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={appDesign} alt="" className='skillBarImg' />
            <div className="skillBarText">
            <h2>MernStack</h2>
            <p>I build fullstack websites </p>
            </div>
        </div>
        </div>
        </section>
  )
}

export default Skills