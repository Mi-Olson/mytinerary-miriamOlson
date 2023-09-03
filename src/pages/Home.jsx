import React from 'react'
import Carousel from '../components/Carousel'
import { useState, useEffect } from "react";
import CardHome from '../components/CardHome'

import { useSelector, useDispatch } from 'react-redux';

import city_actions from '../store/actions/cities';
const { read_carousel } = city_actions
import Marquee from '../components/Marquee';
import Spinners from '../components/Spinners';

export default function Home() {
    const [show, setShow] = useState(true)

    const carousel = useSelector(store => store.cities.carousel)

    const dispatch = useDispatch()

  


   
    useEffect(
        () => {
            
            if (carousel.length === 0) {
                
                
                dispatch(read_carousel())
            }

           
        //    setInterval(() => {
        //         console.log('This will run every second!');
        //         setShow(true)
        //       }, 1000);
             
              
            //  setTimeout(() => {
               
            //     console.log("este es el primer mensaje");
            //     setShow(true)
            // }, 1000)
      
 
        }, []);

    return (



        <div className="container text-center min-vh-75 justify-content-center align-self-center "  >
            <Marquee />
            <div className='row '>
                <div className='col-sm-12 col-md-3 col-lg-3 '>
                    <CardHome />
                </div>
                {!show ? (
                    <div className='d-flex  w-100 justify-content-center text-center'>
                    <Spinners/>
                </div>
                    

                ) : (<div className="col-sm-12 col-md-9 col-lg-9 d-flex items-center ">
                <Carousel data={carousel} />
                </div>

                    
                    
                )}
            </div>
        </div>
    )
}
