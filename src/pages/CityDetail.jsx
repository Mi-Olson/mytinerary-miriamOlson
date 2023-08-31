import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Link as Anchor } from 'react-router-dom'
import Itineraries from './Itineraries'
import Detail_of_city from '../components/Detail_of_city'

import { useDispatch,useSelector } from 'react-redux'
import city_actions from '../store/actions/cities'
import itinerary_actions from '../store/actions/itineraries'
const { read_city } = city_actions
const {read_itineraries}=itinerary_actions


export default function CityDetail() {


  const { id } = useParams()
  const dispatch = useDispatch()
  const city = useSelector(store=> store.cities.city)
  
 
  useEffect(() => {
   
    dispatch(read_city({ id:id }))
    dispatch(read_itineraries({_id:id} ))

  }, [])

  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
  //y donde cada VALOR es el valor de la URL
  return (
    <>
  
      <div className='card '>
        <img className='img-fluid' src={city.photo} alt={city.text}></img>


        <div class="card-img-overlay flex flex-col items-top justify-between  mb-10">
          <div className='flex flex-row'>
            <img src="../img/logomi.jpg" width="150" height="150" className=' w-20 h-20 rounded-circle' alt="titulo" />

            <p className=" h-[50px] fs-4 fw-bold rounded-xl w-1/4 border border-secondary text-dark  text-center p-1 " >{city.city}</p>
          </div>
        <div>
          <Anchor to={'/cities'} className="h-[50px] fs-4 fw-bold rounded-xl w-1/4 border border-secondary bg-slate-800 opacity-75 text-white  text-center p-2" >Back</Anchor>
          </div>
        </div>
       
        
   

      </div>
      <div className=' flex flex-column justify-content-center text-center'>
      <p className='display-1  fw-bold '>
      Features    </p>
      <Detail_of_city/>
      <p className='display-1  fw-bold'>
      Itineraries
      </p>
      <Itineraries    
      />
      </div>

    </>

  )
}
