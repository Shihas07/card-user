
import React, { useEffect, useState } from 'react'
import Card from './card'

export default function Body() {
  const [userData,setData]=useState([])
  useEffect(()=>{
     fetch(`https://randomuser.me/api/?page=1&results=1&seed=abc`) 
     .then(response => response.json())
     .then(data=>setData(data.results))         
  },[])
  console.log("userData",userData)
  return (

   
       
    <div className='flex justify-center items-center mt-20'>
       {userData.length>0? <Card data={userData}/>:"nothing is there"}
     
        
    </div>
  )
}
