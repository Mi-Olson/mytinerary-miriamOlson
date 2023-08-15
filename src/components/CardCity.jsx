import React from 'react'

export default function CardCity({text, alt,photo}) {


  return (
    
    <div className="card text-bg-dark col-sm-12 col-md-8 col-lg-4  m-2">
      <img src={photo} className="card-img" alt={alt} />
      <div className="card-img-overlay d-flex flex-column justify-content-betweend">
        <h3 className="card-title text-start fw-bold">{text}</h3>
        <button class=" embed-responsive embed-responsive-1by1  gap-1">


                    <img src="../img/logomi.jpg" width="50" height="50" class="img-responsive" alt="titulo" />
                    {/* <img src="../img/logo.png" width="150" height="50"  class="img-responsive" alt="titulo" /> */}

                </button>
        
      </div>
    </div>
   
  )
}
