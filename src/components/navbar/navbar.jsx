import React, { useState, useRef } from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import twitterLight from '../../assets/twitter-light.svg';

import logo from '../../assets/logo.png'
import underline from '../../assets/underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();
  
  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="put the logo here" />
        <img src={menu_open} onClick={openMenu} alt="put the menu_open file here" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="menu close icon here" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt='underline here'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt='underline here'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu==="education"?<img src={underline} alt='underline here'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#certificate'><p onClick={()=>setMenu("certificate")}>Certficates</p></AnchorLink>{menu==="certificate"?<img src={underline} alt='underline here'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt='underline here'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img src={underline} alt='underline here'/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt='underline here'/>:<></>}</li>
        </ul>
        <div className="nav-connect">
        {/* <AnchorLink className='anchor-link' offset={50} href="#contact">Connect With ME</AnchorLink> */}
          <a href="https://twitter.com/" target="_blank">
              <img src={twitterLight} alt="Twitter icon" />
            </a>
            <a href="https://github.com/skbiswas0509" target="_blank">
              <img src={githubLight} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/sukumar-biswas-919888244/" target="_blank">
              <img src={linkedinLight} alt="Linkedin icon" />
            </a>
          </div>
    </div>
  )
}

export default Navbar