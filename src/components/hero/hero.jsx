import React from 'react'
import "./hero.css"
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id ="home" className='hero'>
        <img src={profile_img} alt="Enter the profile picture here" />
        <h1><span>I am Sukumar Biswas,</span>Cybersecurity Specialist & Web Developer.</h1>
        <p>I specialize in cybersecurity and web development, focusing on safeguarding data, 
          securing digital systems, and building robust web applications to protect against potential threats.</p>
        <div className="hero-action">
            {/* <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div> */}
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero