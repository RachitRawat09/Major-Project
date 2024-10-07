import React from 'react'
import './Details.css'
import clock from '../../../assets/clock.png'
import briefcase from '../../../assets/briefcase.png'
import map from '../../../assets/map-pin.png'
import g137 from '../../../assets/g137.png'
const Details = () => {
  return (
    <div className='details'>
      <div className="icons">
        <img src={briefcase} alt="" /><span>Hotels & Tourism</span>
        <img src={clock} alt="" /><span>Full time</span>
        <img src={g137} alt="" /><span>$4000-$4200</span>
        <img src={map} alt="" /><span>New-York,USA</span>
        
      </div>
      <button className='btn'>Job Details</button>
    </div>
  )
}

export default Details
