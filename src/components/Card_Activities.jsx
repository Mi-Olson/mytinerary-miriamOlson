import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

const Card_Activities = ({ activities }) => {
    const [up, setUp] = useState(false)
     console.log(activities);
    // // const [activities,setActivities]=useState([])
   
    // let activities1= useSelector(store=> store.activities.activities)
    // let activities= activities1.filter((ele)=> {
    //     console.log( "elemento"+ele.itinerary_id._id);
    //     console.log("buscado"+itinerary_id);
    //     ele.itinerary_id._id.toString() === itinerary_id.toString()}) 
    
    // console.log(activities1);
    

    return (
        <>

            <div classNameName='flex flex-row justify-content-end'>
                <p>view more</p>

                <button onClick={() => setUp(!up)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d={up ? "M4.5 15.75l7.5-7.5 7.5 7.5" : "M19.5 8.25l-7.5 7.5-7.5-7.5"} />
                    </svg></button>

            </div>
            <div className='flex flex-wrap'>
            {
                up && (
                    activities.map(each=>
                    <div  className="card bg-secondary" style={{width: "18rem"}}>
                        <img src={each.photo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{each.name}</p>
                        </div>
                    </div>)
                    
            )
            }
            </div>




        </>
    )
}

export default Card_Activities