import React, { useState, useRef } from 'react'
import CityHome from '../components/CitYHome'
import { useEffect } from 'react'
import axios from 'axios'

import apiUrl from '../services/apiUrl'
import CardCity from '../components/CardCity'
import NotFound from '../components/NotFound'

const Cities = () => {
  const [cities, setCities] = useState([])
  const [reEffec, setReEffect] = useState(false)
  const [found,setFound]= useState(true)
  const[search,setSearch]=useState("")

  const text = useRef()

  useEffect(() => {
    setSearch(text.current.value)
    axios(apiUrl + 'cities?city=' + text.current.value)
      .then(res => {setCities(res.data.response);setFound(true)})
      .catch(err =>{console.log(err); setFound(false)})
  }, [reEffec])

  function handlerFilter() {
    setReEffect(!reEffec)
   
  }
  return (
    <>
      <input ref={text} type="text" name="text" id="text" onKeyUp={handlerFilter} />
      {(found)?(
      cities.map((each, index) =>
        <CardCity
          key={index}
          photo={each.photo}
          alt={each.id}
          text={each.city}
        />
      )):(<NotFound search={search}/>)}


    </>
  )

}


export default Cities