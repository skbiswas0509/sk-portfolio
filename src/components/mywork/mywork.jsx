import React from 'react'
import './mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FaArrowRight } from "react-icons/fa6";
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {

    const handleClick=()=>{
        window.open("https://github.com/skbiswas0509","_blank")
    }
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Some Projects</h1>
            <img src={theme_pattern} alt="enter the theme pattern here" />
        </div>
        <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="mywork-box">
                        <a href={work.w_link} target="_blank">
                            <img src={work.w_img} alt={`Project ${index + 1}`} />
                        </a>
                        <hr className="mywork-divider" />
                        <div className="mywork-content">
                            <h3>{work.w_title}</h3>
                            <p>{work.w_desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        <div onClick={handleClick} className="mywork-showmore">
            <p>Show More</p>
            <FaArrowRight size={30}/>
        </div>
    </div>
  )
}

export default Mywork