import React from 'react'
import { Link as Anchor} from 'react-router-dom'
import LinkA from './LinkA'
export default function CardCity({text, alt,photo}) {


  return (
    
    <div className="card text-bg-dark col-sm-12 col-md-8 col-lg-4  m-2">
      <img src={photo} className="card-img" alt={alt} />
      <div className="card-img-overlay d-flex flex-column justify-content-betweend">
        <h3 className="card-title text-start fw-bold">{text}</h3>
        <button class=" embed-responsive embed-responsive-1by1  gap-1">

                    {/* <Anchor  to={'/cities'} className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1" >More</Anchor> */}
                    <img src="../img/logomi.jpg" width="50" height="50" class="img-responsive" alt="titulo" />
                    {/* <img src="../img/logo.png" width="150" height="50"  class="img-responsive" alt="titulo" /> */}

                </button>
        
      </div>
    </div>
   
  )
}
