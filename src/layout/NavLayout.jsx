import React from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from '../components/Header2'
const NavLayout = () => {

  const image="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjBudWJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  return (
    <div className=" h-[100vh] bg-cover bg-center "  style={{
      backgroundImage: `url(${image})`,
      // backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     
    }}>
  {/* // <div className='multi_bg_example min-vh-100 '> */}
    <Header2/>
    <div className="flex justify-center items-center " 
    
    >
      
    <Outlet/>
    
    </div>
    </div>
   
  )
}

export default NavLayout