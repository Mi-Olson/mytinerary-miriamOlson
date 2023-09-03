import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

import user_actions from '../store/actions/users'
const { read_user } = user_actions
import Card_Activities from './Card_Activities'



const Card_Itineraries = ({ each, all_price }) => {

    const dispatch = useDispatch()
  const user= useSelector(store=> store.users.user) 
  console.log(user);

    const [up, setUp] = useState(false)
    const money = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mOpqmkCQov1a-kWEjzSEvPY4WAdLws6BOg&usqp=CAU"
    const [like,setLike]=useState(false)
    let countMoney = 0
    if (each.price <40){  countMoney=1  }
    else if (each.price <=80){  countMoney=2  } 
    else if (each.price <=100){  countMoney=3  } 
    else if (each.price <150){  countMoney=4  } 
   else  if (each.price >=150){  countMoney=5  } 

    let array = []
    while (countMoney > 0) {
        array.push(money)
        countMoney -= 1
        }
    const duration=Math. ceil(each.duration/60)
    
    useEffect(() => {
   
        dispatch(read_user({user_id:each.city_id.admin_id }))
        
    
      }, [])

    return (
        <>
            <div className="card sm:w-12/12 md:w-6/12  mx-5 p-2 bg-secondary bg-gradient m-2" >
                <img className="card-img-top" src={each.photo} alt={"..."} />
                <div class="card-body">
                    <h5 class="card-title display-6 ">{each.name}</h5>
                    <div className='flex flex-row '>

                        <p class="card-text" onClick={()=>setLike(!like)}>
      
                            <svg xmlns="http://www.w3.org/2000/svg" fill={like ?("red") : ("none")} viewBox="0 0 24 24" stroke-width="1.5" stroke={like ?("red") : ("white")} class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </p>
                        <p class="card-text"> {like ?("1") : ("0")} </p>
                    </div>



                </div>
                
                
                        <div className='flex flex-row justify-content-between'>
                            <div className='flex flex-column w-3/12  text-center justify-content-center items-center '>
                                <p className='h5'>user</p>
                                <img width="50" height="50" className="  rounded-circle  " src={user.photo} alt={"..."} />
                                <p>{user.name}</p>
                                
                            </div>
                            <div className='flex flex-column w-3/12  text-center'>
                                <p className='h5'>Hasshtags:</p>
                                <div className='flex flex-column'>
                              
        
                                                        
                                    {each.tags.map((ele)=>(
                                    <p>{ele}</p>
                                ))}  
                                </div>

                            </div>
                            <div className='flex flex-column w-3/12  text-center'>
                                <p className='h5'>Duration:</p>
                                <p>{(duration)} {(duration>1)?"Hours":"Hour"} </p>
                            </div>
                            <div className='flex flex-column w-3/12 text-center '>
                                <div className='text-center'>
                                    <p className='h5'>Price</p>
                                </div>
                                <div className='flex flex-wrap justify-content-center text-center'>
                                    {
                                        (array).map(ele => (
                                            <img width="50" height="50" className="p-1" src={ele} alt={"..."} />
                                        )

                                        )
                                    }
                                </div>

                            </div>


                        </div>
                    
                <Card_Activities></Card_Activities>



            </div>

        </>
    )
}

export default Card_Itineraries