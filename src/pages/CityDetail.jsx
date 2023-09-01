import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


import Itineraries from './Itineraries'
import Detail_of_city from '../components/Detail_of_city'

import { useDispatch,useSelector } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_city } = city_actions
import itinerary_actions from '../store/actions/itineraries'
const {read_itineraries}=itinerary_actions
import {useNavigate}  from 'react-router-dom'
import NotFoundElement from '../components/NotFoundElement'


export default function CityDetail() {

 
  const { id } = useParams()
  const dispatch = useDispatch()
  const city = useSelector(store=> store.cities.city)
  const [showItineraries,setShowItineraries]=useState(false)
  const navigate=useNavigate()
 const goCities = () => {
  navigate('/cities')
}
  
  
 
  useEffect(() => {
   
    dispatch(read_city({ id:id }))
    dispatch(read_itineraries({_id:id} ))

  }, [])

  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
  //y donde cada VALOR es el valor de la URL
  return (
    <>
  
      {/* <div className='card '> */}
      <div className=" h-[100vh] bg-cover bg-center "  style={{
      backgroundImage: `url(${city.photo})`,
      // backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     
    }}>
        <img  id='top' src="../img/logomi.jpg" width="150" height="150" className=' w-20 h-20 rounded-circle position-absolute mt-1 mr-2' alt="titulo" />


        <div class="flex flex-column justify-content-center  text-center items-center  mt-20">
          <div className='flex  justify-content-center'>
          
            <p className=" fs-1 fw-bold rounded-xl w-8/12 text-white text-shadow  text-center p-1 " >{city.city}</p>
          </div>
          <div className='flex  justify-content-center' >
          
          <p className=" fs-3 rounded-xl w-8/12  text-white bg-slate-800 opacity-60  p-1 " >{city. smalldescription}</p>
        </div>
      
        </div>
        <div className='flex  justify-content-center'>
          <button type="button"   onClick={()=>setShowItineraries(!showItineraries)} className=" mt-5 fs-6 btn-flat  fw-bold rounded-xl w-2/12 h-[50] border border-secondary opacity-95 text-white  text-center p-2">
            <a href= {showItineraries ? ("#itineraries") : ("#")}>
            {showItineraries ? ("HIDE ITINERARIES") : ("VIEW ITINERARIES")}
             </a></button>
          {/* <Anchor to={'/cities'} className=" mt-5 fs-6 btn-flat  fw-bold rounded-xl w-10/12 h-1/12 border border-secondary opacity-75 text-white  text-center p-2" >View Itineraries</Anchor> */}
          </div>
       
        
   

      </div>
      <button  type="button" onClick={goCities} className=" mt-5 fs-6 btn-flat  fw-bold rounded-xl w-2/12 h-[50] border border-secondary opacity-95 text-white  text-center p-2">BACK TO CITIES</button>

      <div className=' flex flex-column justify-content-center text-center'>
      <p className='display-1  fw-bold ' id='itineraries'>  Features of {city.city}  </p>
      
      <Detail_of_city/>
      {showItineraries ? (<>
      <p className='display-1  fw-bold' >  Itineraries  </p>
      <Itineraries    />  </>):(
        <div className=' flex flex-column justify-content-center mt-5 mb-5 items-center'>
        <NotFoundElement search={"Itineraries"}/>
        </div>
      )}
      </div>
      

    </>

  )
}
