import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card_Itineraries from '../components/Card_Itineraries'
import NotFoundElement from '../components/NotFoundElement'
const Itineraries = () => {

  const background_ = "../img/park-in-lujiazui-financial-center-shanghai-china.jpg"
  const [show_, setShow_] = useState(false)

  const itineraries = useSelector(store => store.itineraries.itineraries)
  let all_price=0
  
   itineraries.forEach((each)=>(all_price+=parseInt(each.price)))
  
  return (
    <>
      <div className='flex flex-wrap w-12/12 justify-content-center text-center'>
   {((itineraries.length) > 0)? (<>
      {itineraries.map((each, key) => (
        <Card_Itineraries

          key={key}
          each={each}
          all_price={all_price}
        />
      
      ))}  </>):(
     
     <div className=' flex flex-column justify-content-center mt-5 mb-5 items-center'>
      <NotFoundElement search={"Itineraries"}/>
      </div>)}

</div>

    </>

  )
}

export default Itineraries