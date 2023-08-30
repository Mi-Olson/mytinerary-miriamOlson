import React from 'react'
import {useSelector } from 'react-redux'
const Itineraries = () => {
  
  const background_="../img/park-in-lujiazui-financial-center-shanghai-china.jpg"
  
  const itineraries=useSelector(store =>store.itineraries.itineraries)
  return (
    <>
    itineraries

    {itineraries.map((each,key)=>
    <p>{each.name}</p>)}
    
    </>
  )
}

export default Itineraries