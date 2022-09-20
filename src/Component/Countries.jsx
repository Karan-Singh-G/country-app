import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from "./countries.module.css"

const Countries = () => {
    const param=useParams()
    const {countries}=param
    const [data,setData]=useState([]);
    useEffect(()=>{
   axios.get(`https://restcountries.com/v3.1/name/${countries}`)
   .then((res)=>setData(res.data))
    },[])    
    
  return (
    <div>{data.map((res)=>{
        console.log(res)
        return <div  className={style.card} >
        <div className={style.image}>
         <img src={res.flags.png} alt="" />
        </div>
        <h2>Country:{res.name.common}</h2>
        <h2>Population:{res.population}</h2>
        <h2>Region:{res.region}</h2>
        <h2>BGN:{res.currencies.BGN.name}</h2>
        <h2>Area:{res.currencies.area}</h2>
        <h2>Fifa{res.currencies.fifa}</h2>
        {/* <h2>{res.capital[0]}</h2> */}
      

     </div>
    })}</div>
  )
}

export default Countries