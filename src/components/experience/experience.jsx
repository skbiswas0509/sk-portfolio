import React from 'react'
import './experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import nsu_pic from '../../assets/nsu.jpg'

const Experience = () => {
  return (
    <div id='experience' className='exp'>
        <div className='exp-title'>
          <h1>Experience</h1>
          <img src={theme_pattern} alt="Enter the theme pattern here" />
        </div>

        <div className="experience-info">
          <div className="experience-left">
            <p className='p1'>ACNABIN Chartered Accountants</p>
            <p>Information System Audit Internship</p>
            <p>2025 - 2026</p>
          </div>
          <div className="experience-right">
            <div className="experience-para">
              <p>Assisted in auditing IT infrastructure, focusing on security compliance, access control, and data integrity.</p>
              <p>Reviewed compliance with regulations (e.g., ISO, GDPR) and company policies, contributing to risk assessment reports.</p>
              <p>Reviewed software licenses, asset inventory, password policies, and secure coding practices for web and mobile applications.</p>
              <p>Prepared and maintained detailed audit workpapers, ensuring accuracy and adherence to professional standards.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience