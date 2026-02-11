import React from 'react'
import './experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import nsu_pic from '../../assets/nsu.jpg'

const Education = () => {
  return (
    <div id='education' className='edu'>
        <div className='edu-title'>
          <h1>Experience</h1>
          <img src={theme_pattern} alt="Enter the theme pattern here" />
        </div>

        <div className="education-info">
          <div className="education-left">
            {/* <img src={nsu_pic} alt="put the nsu pic here" /> */}
          </div>
          <div className="education-right">
            <div className="education-para">
            <p className='p1'>ACNABIN Chartered Accountants</p>
            <p>Information System Audit</p>
            <p>Internship</p>
            <p>2025 -2026</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Education