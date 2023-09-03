import React, { useEffect } from 'react'
import { useState} from "react";
import CardCity from './CardCity'


import Spinners from './Spinners';
export default function Carousel({data}) {
  
 const [show,setShow]=useState(false)
 

 useEffect(
  () => {

    setTimeout(() => {
      console.log("este es el primer mensaje");
      setShow(true)
    }, 2000);
    

      
  },      
  []      
 
)


  return (
    <>
   

{!show ?(
        <div className='d-flex  w-100 justify-content-center text-center'>
        <Spinners></Spinners>
        </div>

      ):(
      <div id="carouselExampleAutoplaying " className="carousel slide bg-gray-400 rounded" data-bs-ride="carousel">
        <div className="carousel-inner ">
          
          <div className="carousel-item active container" >
            <div className="flex  flex-wrap justify-center mt-1">

              {data.slice(0, 4).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each._id}
                  text={each.city}
                />
              ))}
            </div>

          </div>
          <div className="carousel-item">

            <div className="flex  flex-wrap justify-center mt-1">

              {data.slice(4, 8).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each._id}
                  text={each.city}
                />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="flex  flex-wrap justify-center mt-1">

              {data.slice(8, 12).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each._id}
                  text={each.city}
                />
              ))}
            </div>
          </div>
        
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>)}

    </>
  )
}
