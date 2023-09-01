import React, { useEffect, useState } from 'react'
import { Link as Anchor} from 'react-router-dom'

export default function CardCity({text, alt,photo}) {
const [id,setId]=useState("")

console.log(alt)

function funcion(alt) {
  setId(alt)
  // console.log(alt);

}

useEffect(() => {


  funcion(alt)


}, [])
  return (
    
    <div className="card text-bg-dark col-sm-12 col-md-8 col-lg-4  m-2  ">
      <img src={photo} className="card-img" alt={alt} />
      <div className="card-img-overlay d-flex flex-column justify-content-betweend">
        <h3 className="card-title text-start fw-bold text-shadow">{text}</h3>
        <button class=" embed-responsive embed-responsive-1by1  gap-1">

                   
                </button>
                <Anchor  to={'/cityDetail/'+id} className="btn-flat rounded-xl w-2/5 col-sm-4 col-md-4 col-lg-4  flex justify-center items-center mx-1" >View More</Anchor>
                {/* <Anchor to={'/cities'} className="h-[50px] fs-4 fw-bold rounded-xl w-1/4 border border-secondary bg-slate-800 text-white  text-center p-2" >Back</Anchor> */}
        
      </div>
    </div>
   
  )
}
