import React from 'react'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {

  const myimage='../img/welcome.jpg'
  return (
    <div className="flex justify-center items-center h-[100vh] bg-cover bg-center"  style={{
      backgroundImage: `url(${myimage})`,
      // backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // height: '500px',
    }}>
  
    <Outlet/>
    
    </div>
  )
}

export default NavLayout