import React from 'react'
import Header2 from '../components/Header2'

import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return (
    <div className='d-flex flex-column justify-content-between aling-content-between min-vh-100 multi_bg_example' >
        <Header2/>
        <Outlet/>
       <Footer/>
    </div>
  )
}
