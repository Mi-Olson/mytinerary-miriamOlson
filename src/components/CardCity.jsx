import React from 'react'

export default function CardCity({text, alt,photo}) {


  return (
    
    <div class="card text-bg-dark w-2/5 flex flex-col items-center m-2">
      <img src={photo} class="card-img" alt={alt} />
      <div class="card-img-overlay">
        <h5 class="card-title">{text}</h5>
        
      </div>
    </div>
   
  )
}
