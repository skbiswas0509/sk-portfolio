import React from 'react'
import './education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import nsu_pic from '../../assets/nsu.jpg'

const Education = () => {
  return (
    <div id='education' className='edu'>
        <div className='edu-title'>
          <h1>Education</h1>
          <img src={theme_pattern} alt="Enter the theme pattern here" />
        </div>

        <div className="education-info">
          <div className="education-left">
            <img src={nsu_pic} alt="put the nsu pic here" />
          </div>
          <div className="education-right">
            <div className="education-para">
            <p className='p1'>North South University</p>
            <p>Bsc in Computer Science And Engineering</p>
            <p>2019 - 2024</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Education