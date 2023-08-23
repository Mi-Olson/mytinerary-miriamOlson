import React, { useState, useRef } from 'react'

import { useEffect } from 'react'
import axios from 'axios'

import apiUrl from '../services/apiUrl'

import NotFound from '../components/NotFound'
import CardSearchCities from '../components/CardSearchCities'

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
    <div className='flex flex-column gap-1 text-center '>
      <div>
      <input placeholder='look for your next trip' className=' h-[50px]  rounded-xl w-[300px] border border-secondary text-dark fs-4 p-1 text-center ms-4 mt-4' ref={text} type="text" name="text" id="text" onKeyUp={handlerFilter} />
      </div>
      <div className='flex flex-wrap'>
      {(found)?(
      cities.map((each, index) =>
    
      <CardSearchCities
     
          key={index}
          photo={each.photo}
          alt={each._id}
          text={each.city}
          
          
        />
       
      )):(<NotFound search={search}/>)}
      </div>

</div>
    </>
  )

}


export default Cities