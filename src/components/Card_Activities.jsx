import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

const Card_Activities = ({ activity }) => {
    
     
    // // const [activities,setActivities]=useState([])
   
    // let activities1= useSelector(store=> store.activities.activities)
    // let activities= activities1.filter((ele)=> {
    //     console.log( "elemento"+ele.itinerary_id._id);
    //     console.log("buscado"+itinerary_id);
    //     ele.itinerary_id._id.toString() === itinerary_id.toString()}) 
    
    // console.log(activities1);
    

    return (
        <>

          
                    <div  className="card bg-secondary" style={{width: "18rem"}}>
                        <img src={activity.photo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{activity.name}</p>
                        </div>
                    </div>
                    
            


        </>
    )
}

export default Card_Activities