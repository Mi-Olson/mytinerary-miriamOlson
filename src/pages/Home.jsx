import React from 'react'
import Carousel from '../components/Carousel'
import { useState, useEffect } from "react";
import CardHome from '../components/CardHome'
// import apiUrl from '../services/apiUrl'
// import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';

import city_actions from '../store/actions/cities';
const {read_carousel}=city_actions


export default function Home() {


    // const [data, setData] = useState([])
    // const city_reducer=useSelector(store=>store.cities)
    // console.log(city_reducer);
    const carousel =useSelector(store=>store.cities.carousel)
    // console.log(carousel);
    const dispatch =useDispatch()
    useEffect(
        () => {
            if (carousel.length===0) {
            dispatch(read_carousel())}

            // axios(apiUrl+'cities/carousel')
            //      .then(res => setData(res.data.data_carousel))
            //     .catch(err => console.log(err))    
        },        //callback que NO debe retornar nada y NO puede ser asincrona
        []        //array de dependencias
        //cuando está vacío EL EFECTO se ejecuta UNA UNICA VEZ cuando se monta el componente
        //cuando tiene variables de dependencias EL EFECTO se ejecuta (cuando se monta y) CADA VEZ que varía/cambia alguna de esas variables
        //[show]  //en este ejemplo CADA VEZ que el booleano CAMBIE, se ejecuta la caalback de la L28
    )

    return (



        <div className="container text-center min-vh-75 justify-content-center align-self-center "  >
            <div className='row'>
                <div className='col-sm-12 col-md-3 col-lg-3 '>
                    <CardHome />
                </div>

                <div className="col-sm-12 col-md-9 col-lg-9 flex items-center ">
                    <Carousel data={carousel} />
                </div>
            </div>
        </div>
        
    )
}
