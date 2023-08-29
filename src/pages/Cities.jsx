import React, { useState, useRef } from 'react'

import { useEffect } from 'react'

import NotFound from '../components/NotFound'
import CardSearchCities from '../components/CardSearchCities'

import { useSelector,useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_cities } = city_actions

const Cities = () => {
  const cities =  useSelector(store=> store.cities.cities)
  const [reEffec, setReEffect] = useState(false)
  
  const[search,setSearch]=useState("")
  

  const text = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    setSearch(text.current.value)
    dispatch(read_cities({ text:text.current?.value }))

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
      {(cities)?(
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