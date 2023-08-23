import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../services/apiUrl'
import { Link as Anchor } from 'react-router-dom'

export default function CityDetail() {


  const { id } = useParams()
  // console.log(id);
  const [city, setCity] = useState([])
  function funcion(id) {
    setCity(id)
    console.log(id);
  }



  useEffect(() => {


    funcion(id)


  }, [])
  useEffect(() => {


    axios(apiUrl + 'cities/' + id)


      .then(res => setCity(res.data.response))
      .catch(err => { console.log(err) })
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
       
        <div className=' card-title h6 text-black  w-200 h-15'>CityDetail of city under construction</div>
      </div>

    </>

  )
}
