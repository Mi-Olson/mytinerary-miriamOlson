import React, { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'
const CardSearchCities = ({text, alt,photo}) => {
    // const [viewMore,setViewMore]=useState(false)
  return (
    <div className="mx-auto my-2 p-2 card text-bg-dark col-sm-12 col-md-5 col-lg-5 ">
      <img src={photo} className="card-img" alt={alt} />
      <div className="card-img-overlay flex flex-column " style={{ justifyContent:"space-between"  }}>
        <h3 className="card-title text-start fw-bold text-shadow font-home">{text} </h3>
       

                 
                    <img src="../img/logomi.jpg" width="50" height="50" className="rounded-circle img-responsive" alt="titulo" />
                    
                <Anchor  to={'/cityDetail/'+alt} className="btn-flat w-md-25 w-sm-50 rounded-xl  col-sm-4 col-md-4 col-lg-4 flex justify-center items-center mx-1" >View More</Anchor>
      </div>
      
    </div>
  )
}

export default CardSearchCities