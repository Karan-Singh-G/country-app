import React from 'react'
import Home from './Home';
import Countries from './Countries';
import {
   
  
    Routes,
    Route
  } from "react-router-dom";

const Routed = () => {
  return <div>
 
    <Routes>
   
 
   <Route  path="/" element={<Home/>} />
   <Route path="/:countries" element={<Countries/>}/>
    </Routes>
  </div>
}

export default Routed