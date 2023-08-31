import React from 'react'
import { useState } from 'react'
const Card_Itineraries = ({ each }) => {
    const [up, setUp] = useState(false)

    return (
        <>
            <div className="card w-4/12 mx-5 p-2 bg-secondary bg-gradient m-2" >
                <img className="card-img-top" src={each.photo} alt={"..."} />
                <div class="card-body">
                    <h5 class="card-title">{each.name}</h5>
                    <p class="card-text">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>



                    </p>



                </div>
                <div className='flex flex-row justify-content-between'>
                    <p className='ms-2'>algo</p>
                    <button onClick={() => setUp(!up)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d={up ? "M19.5 8.25l-7.5 7.5-7.5-7.5" : "M4.5 15.75l7.5-7.5 7.5 7.5"} />
                        </svg></button>

                </div>
                {
                    up && (
                        <div>

                            under construction
                        </div>
                    )
                }



            </div>
        </>
    )
}

export default Card_Itineraries