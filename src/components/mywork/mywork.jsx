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
            {mywork_data.map((work,index)=>{
                return <a href={work.w_link}><img key={index} src={work.w_img} alt="enterth the work images here" /></a>
            })}
        </div>
        <div onClick={handleClick} className="mywork-showmore">
            <p>Show More</p>
            <FaArrowRight size={30}/>
        </div>
    </div>
  )
}

export default Mywork