import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Label from './Components/Label/Label'
import Jobs from './Components/Jobs/Jobs.jsx'
import JobHeading from './Components/JobHeading/JobHeading.jsx';
import MainTitle from './Components/MainTitle/MainTitle.jsx';

const App = () => {
  return (
    <>
    <Navbar/>
    <Label/>
    <JobHeading/>
    <div className="jobContainer">
    <Jobs/>
    <Jobs/>
    <Jobs/>
    </div>
    <div className="container-fluid ">
    <MainTitle/>
    </div>
    
    
    
    </>
  )
}

export default App
