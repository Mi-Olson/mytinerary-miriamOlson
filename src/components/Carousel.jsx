import React from 'react'
import { useState} from "react";
import CardCity from './CardCity'
export default function Carousel({data}) {
  
  let [counter,setCounter] = useState(0)
  let [counterTo,setCounterTo] = useState(4)
  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0)
      setCounterTo(4)
    } else {
      setCounter(counter+4)
      setCounterTo(counterTo+4)
    }
    console.log(counter);
    console.log(counterTo);
  }
  function prev_slide() {
    if (counter <= 0) {
      setCounter(data.length-4)
      setCounterTo(data.length)
    } else {
      setCounter(counter-4)
      setCounterTo(counterTo-4)
    }
    console.log(counter);
    console.log(counterTo);
  }






  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide bg-gray-400 rounded" data-bs-ride="carousel">
        <div className="carousel-inner ">
          
          <div className="carousel-item active container" >
            <div className="flex  flex-wrap justify-center mt-1">

              {data.slice(0, 4).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each.id}
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
                  alt={each.id}
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
                  alt={each.id}
                  text={each.city}
                />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="flex  flex-wrap flex-sm-column flex-md-row  flex-lg-row justify-center mt-1">

              {data.slice(12, 16).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each.id}
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
      </div>

    </>
  )
}
