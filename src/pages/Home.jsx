import React from 'react'
import Carousel from '../components/Carousel'
import { useState,useEffect } from "react";
import CardHome from '../components/CardHome'
import Header from '../layout/Header'
import Header2 from '../layout/Header2'
import axios from "axios";
import Footer from '../layout/Footer'

export default function Home() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([])
    useEffect(
        ()=>{
          axios('/data.json')
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
        },        //callback que NO debe retornar nada y NO puede ser asincrona
        []        //array de dependencias
                  //cuando está vacío EL EFECTO se ejecuta UNA UNICA VEZ cuando se monta el componente
                  //cuando tiene variables de dependencias EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que varía/cambia alguna de esas variables
        //[show]  //en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la caalback de la L28
      )

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
                   
                    <div className="col-sm-12 col-md-8 col-lg-8 flex items-center ">
                        <Carousel data={data} />
                    </div>
                </div>
            </div>
            <div className='"align-self-end' >
                <Footer />
            </div>
        </div>

    )
}
