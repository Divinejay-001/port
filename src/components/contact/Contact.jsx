import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Face from '../../assets/face.png'
import Micro from '../../assets/micro.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs
    //       .sendForm('service_2u2e4dw', 'template_wnxfh8q', form.current, {
    //         publicKey: 'K7B1t2x7_WH5xrnlj1tEq',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };
    const sendEmail = (e)=>{
      e.preventDefault();
      emailjs.sendForm('service_o2mv64m', 'template_wnxfh8q', form.current, '-6O_x7lhtYIqwaClF')
      .then((result)=>{
console.log(result.text);
      },(error) =>{
         console.log(error.text);
            })
    }
  return (
<section id="contactPage">
    <div className="clients">
<h1 className="contactPageTitle">My Clients</h1>
<p className="clientsDesc">
    I have worked with many brilliant clients, who have supported me throughout my career. They have given me valuable insights and advice, and have encouraged me to continue pushing myself and my skills. I am always excited to work with new clients, and I am confident
     that I will be able to provide the best possible service.
</p>
<div className="clientImgs">
    <img src={Walmart} alt="" className="clientImg" />
    <img src={Adobe} alt="Image2" className="clientImg" />
    <img src={Face} alt="Image3" className="clientImg" />
    <img src={Micro} alt="Image4" className="clientImg" />
</div>
    </div>
    <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
<form className="contactForm" ref={form} onSubmit={sendEmail}>
    <input type="text" className="name" placeholder='Enter Your Name' name='your_name'/>
    <input type="email" className="email" placeholder='Enter Your Email' name='your_email' />
    <textarea name="message" rows="5" className="msg" placeholder='Type Your Message'></textarea>
    <button type='submit' value="send" className="submitBtn">Submit</button>
</form>
    <div className="socialMedia">
        {/* <h2>Connect with me</h2> */}
        <a href="https://www.facebook.com/Divinegift Johnson" className="socialMediaLink"><i id='m' className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/@Divinegift9503" className="socialMediaLink"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com/divinegiftchidalu" className="socialMediaLink"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/divinegift-johnson-739977324/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BB0yswdE6Tfm0oCjBETAUSg%3D%3D" className="socialMediaLink"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/Divinejay-001" className="socialMediaLink"><i className="fab fa-github"></i></a>
        <a href="#" className="socialMediaLink"><i className="fab fa-dribbble"></i></a>
        <a href="https://www.youtube.com/feed/you" className="socialMediaLink"><i className="fab fa-youtube"></i></a>
    </div>
    </div>
</section>
)
}

export default Contact