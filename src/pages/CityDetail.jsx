import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../services/apiUrl'
export default function CityDetail() {
  const {id } = useParams()
  // console.log(id);
  const [id_city,setCity]=useState("")
  function funcion(id){
    setCity(id)
    console.log(id);
  }


  useEffect(() => {
    
    // let {id } = useParams()
    funcion(id)
    
   
  }, [])
  // useEffect(() => {
  //   let params={}
  //   params.city_id=id
  //   let url=apiUrl + 'cities/:city_id'
  //   axios({ method: 'get',params,url:url ,response:'json' })
  //     .then(res => {setCity(res.data.response),console.log(res.data.response)})
  //     .catch(err =>{console.log(err)})
  // }, [])


  




  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
  //y donde cada VALOR es el valor de la URL
  return (
    <>
    
    <p className='h2 btn-flat text-bg-dark '>{id_city}ojo</p>
    {/* <img src={photo} alt=""  /> */}
    <button className='btn btn-flat' type="button" onClick={funcion}>button</button>
    <div>CityDetail of city under construction</div>
    </>

  )
}
