import React from 'react'

export default function CardCity({text, alt,photo}) {


  return (
    
    <div className="card text-bg-dark col-sm-12 col-md-8 col-lg-4 items-center m-2">
      <img src={photo} className="card-img" alt={alt} />
      <div className="card-img-overlay">
        <h5 className="card-title ">{text}</h5>
        
      </div>
    </div>
   
  )
}
