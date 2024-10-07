import React from 'react'
import timelogo from '../../../assets/Icon.png'
import './Name.css'
const Name = () => {
  return (
    <div className='jobs'>
        {/* Time stamp or saved option  */}
        <div className="timer">
            <button className='time'>10 mint ago</button>
            <img src={timelogo} alt="" className='save-logo' />
          
        </div>
        {/* Job Description name or job */}
        <div className="jobdesc">

            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt="logo" className='logo-image' />
            <div className="job-name">
                <h2>Forward Security Director</h2>
                <p>Security Guard</p>
            </div>
            

        </div>
      </div>
  )
}

export default Name
