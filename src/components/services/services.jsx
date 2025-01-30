import React from 'react'
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data.js'
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
        <div id='services' className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="Enter the theme pattern here" />
            </div>
            <div className="services-container">
                {services_data.map((service,index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_description}</p>
                        <div className="services-readmore">
                            {/* <p>Read More</p>
                            <FaArrowRight size={30}/> */}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Services