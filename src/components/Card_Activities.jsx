import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import apiUrl from '../services/apiUrl'
import axios from 'axios'

const Card_Activities = ({ itinerary_id }) => {
    
     
    const [activities, setActivities] = useState([]);
//   const [noActivities, setNoActivities] = useState(false);

  useEffect(() => {
    axios(apiUrl+'activities?itinerary_id=' + itinerary_id)
      .then((response) => {
        const activitiesData = response.data.response;
        if (activitiesData.length === 0) {
          setActivities([]);
        } else {
          setActivities(activitiesData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    

    return (
        <>
   { activities ?
    (activities.map(activity=>
          
                    <div  className="card bg-secondary" style={{width: "18rem"}}>
                        <img src={activity.photo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">{activity.name}</p>
                        </div>
                    </div>)):( <p>  ¡Sorry, there are no activities available for this itinerary!</p>)
                    
                }
                    
            


        </>
    )
}

export default Card_Activities