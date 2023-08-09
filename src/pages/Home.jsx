import React from 'react'
import Carousel from '../components/Carousel'

import CardHome from '../components/CardHome'
import Header from '../layout/Header'
import Header2 from '../layout/Header2'

import Footer from '../layout/Footer'

export default function Home() {
    return (
        <div className='d-flex flex-column justify-content-between aling-content-between min-vh-100' >
            <div>
                <Header2 />
            </div>

            <div className="container text-center min-vh-75 justify-content-center align-self-center "  >
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4 '>
                        <CardHome />
                    </div>
                    {/* flex items-center justify-center */}
                    <div className="col-sm-12 col-md-8 col-lg-8 flex items-center ">
                        <Carousel />
                    </div>
                </div>
            </div>
            <div className='"align-self-end' >
                <Footer />
            </div>
        </div>

    )
}
