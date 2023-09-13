import React from 'react'
import Header2 from '../components/Header2'

import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  const image="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwZGUlMjBudWJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  return (

    <div className=" h-[100vh] bg-cover bg-center card "  style={{
      backgroundImage: `url(${image})`,
      // backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
     
    }}>
    {/* <div className='d-flex flex-column justify-content-between aling-content-between min-vh-100 multi_bg_example' > */}
        <Header2/>
        <Outlet/>
       <Footer/>
    </div>
  )
}
