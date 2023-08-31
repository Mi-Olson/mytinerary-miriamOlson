import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card_Itineraries from '../components/Card_Itineraries'
const Itineraries = () => {

  const background_ = "../img/park-in-lujiazui-financial-center-shanghai-china.jpg"
  const [show_, setShow_] = useState(false)

  const itineraries = useSelector(store => store.itineraries.itineraries)
  return (
    <>
      <div className='flex flex-wrap w-12/12 justify-content-center text-center'>

      {itineraries.map((each, key) => (
        <Card_Itineraries

          key={key}
          each={each}
        />
      ))}

</div>

      {/* <button type="button" class="btn  btn-flat position-relative">
  likes
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {/* <i className="fa-light fa-heart fa-sm" style={{color: "white"}}></i>
  99
    <span class="visually-hidden">      unread messages</span>
  </span>
</button>
   
<p>{each.name}</p>

    
    )} */}



    </>

  )
}

export default Itineraries