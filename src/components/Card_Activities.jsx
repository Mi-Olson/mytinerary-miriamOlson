import React from 'react'
import { useState } from 'react'

const Card_Activities = () => {
    const [up, setUp] = useState(false)
    return (
        <>

            <div className='flex flex-row justify-content-end'>
                <p>view more</p>

                <button onClick={() => setUp(!up)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d={up ? "M19.5 8.25l-7.5 7.5-7.5-7.5" : "M4.5 15.75l7.5-7.5 7.5 7.5"} />
                    </svg></button>

            </div>
            {
                up && (
                    <div className='flex flex-row justify-content-between'>
                        <div className='flex flex-column w-3/12  text-center justify-content-center items-center '>
                            <p className='h5'>under construction</p>
                        </div>
                    </div>
                )
            }




        </>
    )
}

export default Card_Activities