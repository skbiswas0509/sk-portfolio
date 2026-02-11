import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="Enter the theme pattern here" />
        </div>
        <div className="about-section">
          {/* <div className="about-left">
            <img src={profile_img} alt="enter the profile image here" />
          </div> */}
          <div className="about-right">
            <div className="about-para">
              <p>I’m Sukumar Biswas, a recent graduate in Computer Science and Engineering from North South University. My expertise spans software development and cybersecurity, with proficiency in Python, Django, React.js, SQL, and Web Application Penetration Testing. I enjoy collaborative projects and constantly strive to enhance my technical skills and understanding.</p>
              <p>My true passion lies in cybersecurity, penetration testing, and software developing. I am fascinated by the potential of these fields to solve complex problems and enhance digital security. My ultimate goal is to contribute to meaningful advancements in technology while continuously expanding my knowledge and expertise.</p>
            </div>
          </div>
        </div>
        <div className="about-skills">
              <div className="about-skill"><p>Penetration Testing</p><hr style={{width:"70%"}} /></div>
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}} /></div>
              <div className="about-skill"><p>Python</p><hr style={{width:"60%"}} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
              <div className="about-skill"><p>Javascript</p><hr style={{width:"40%"}} /></div>
              <div className="about-skill"><p>Express JS</p><hr style={{width:"40%"}} /></div>
              <div className="about-skill"><p>Django</p><hr style={{width:"40%"}} /></div>
              <div className="about-skill"><p>PHP</p><hr style={{width:"40%"}} /></div>
              <div className="about-skill"><p>Git</p><hr style={{width:"40%"}} /></div>
        </div>
        {/* <div className="about-achievements">
          <div className="about-achievement">
            <h1>0</h1>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects Completed</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>0</h1>
            <p>Happy Clients</p>
          </div>
        </div> */}
    </div>
  )
}

export default About