import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from "./Home.module.css"


const Home = () => {
    const [regioon,setRegioon]=useState("");
  const [data,setData]=useState([]);
  const [type,settype]=useState("")
  const eventhandler=(e)=>{
      setRegioon(e.target.value);

   }
   const sorthandler=(e)=>{
    settype(e.target.value);
    console.log(type)
    if(type=="high"){
        let new_data=data.sort(function(a,b){
            return a.population-b.population
        })
        setData(new_data)
    }else{
        let new_data=data.sort(function(a,b){
            return b.population-a.population
        })
        setData(new_data)
    }
  
    // console.log(new_data)
   }
   useEffect(()=>{
    if(regioon.length!==0){
     
      axios.get(`https://restcountries.com/v3.1/region/${regioon}`)
      .then(res=>setData(res.data))
      .catch((error)=>console.log(error))
    }else{
      axios.get(`https://restcountries.com/v3.1/all`)
      .then(res=>setData(res.data))
      .catch((error)=>console.log(error))
    }
    
   },[regioon])
   
    

  return (
    <div>
             <label >Choose Region:</label>
   <select  onChange={eventhandler} name="countrie" className='filtering'>
     <option value="">All</option>
     <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="oceania">Oceania</option>
   </select>
     <label >Sorting:</label>
   <select  onChange={sorthandler} name="sorting" className='sorting'>
     <option value="high">high to low</option>
     <option value="low">low to high</option>
    
   </select>
   <div className={style.container}>
   {
      
      
     
      data.map((res,index)=>{
          console.log(res.flags.png)
        
         return<div  className={style.card} key={index} >
            <div className={style.image}>
             <img src={res.flags.png} alt="" />
            </div>
            <h2>Country:{res.name.common}</h2>
            <h2>Population:{res.population}</h2>
            <h2> Region:{res.region}</h2>
            {/* <h2>{res.capital[0]}</h2> */}
           <Link  to={`/${res.name.common}`} >know more</Link>
 
         </div>
      })}
   </div>
   
    </div>
  )
}

export default Home