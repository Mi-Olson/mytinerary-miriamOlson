import React from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from '../components/Header2'
const NavLayout = () => {

  
  return (
  <div className='multi_bg_example min-vh-100 '>
    <Header2/>
    <div className="flex justify-center items-center " 
    
    >
      
    <Outlet/>
    
    </div>
    </div>
   
  )
}

export default NavLayout