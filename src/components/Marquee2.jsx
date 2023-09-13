import React from 'react'

const Marquee2 = () => {
    const img="../img/avion.png"   
const img_2="../img/avion_2.png" 

  return (
    <div>
    <marquee  direction="left"><img src={img} height={"100"} width={"100"} alt=""/></marquee>
    {/* <marquee  width="50%" scrolldelay="1" scrollamount="5" direction="left" loop="infinite"> <p className='font-home display-3 fw-bold fst-italic'> Find the perfect destination </p></marquee> */}
    <marquee  direction="right"><img src={img_2} height={"100"} width={"100"} alt=""/></marquee>
   

    </div>
  )
}

export default Marquee2