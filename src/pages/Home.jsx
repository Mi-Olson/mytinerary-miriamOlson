import React from 'react'
import Carousel from '../components/Carousel'

import CardHome2 from '../components/CardHome2'
import Header from '../layout/Header'
import Header2 from '../layout/Header2'

export default function Home() {
    return (
        <>
        <Header2/>
        {/* <Header/> */}
        <div className=" flex flex-lg-row mx-20 flex-sm-column  bg-gray-500 items-center justify-center">
           
           
           <CardHome2/>
            <div className="max-w-2xl mx-auto  flex items-center justify-center ">

                <Carousel />
            </div>
         



        </div>
        </>
    )
}
