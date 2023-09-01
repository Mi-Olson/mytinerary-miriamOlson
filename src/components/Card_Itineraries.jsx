import React from 'react'
import { useState } from 'react'
const Card_Itineraries = ({ each, all_price }) => {
    const [up, setUp] = useState(false)
    const money = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mOpqmkCQov1a-kWEjzSEvPY4WAdLws6BOg&usqp=CAU"
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
        console.log(array);
        console.log(countMoney);

    }
    const duration=Math. ceil(each.duration/60)
    // const array_of_tag=[] 
    // console.log(each.tags)
    // if  (length(each.tags) >0){
    //     array_of_tag=each.tags
    // }

    return (
        <>
            <div className="card w-6/12 mx-5 p-2 bg-secondary bg-gradient m-2" >
                <img className="card-img-top" src={each.photo} alt={"..."} />
                <div class="card-body">
                    <h5 class="card-title">{each.name}</h5>
                    <div className='flex flex-row '>

                        <p class="card-text">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </p>
                        <p class="card-text"> 1 </p>
                    </div>



                </div>
                <div className='flex flex-row justify-content-end'>

                    <button onClick={() => setUp(!up)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d={up ? "M19.5 8.25l-7.5 7.5-7.5-7.5" : "M4.5 15.75l7.5-7.5 7.5 7.5"} />
                        </svg></button>

                </div>
                {
                    up && (
                        <div className='flex flex-row justify-content-between'>
                            <div className='flex flex-column w-3/12  text-center '>
                                <p>user</p>
                                <p>nombre</p>
                            </div>
                            <div className='flex flex-column w-3/12  text-center'>
                                <p>Hasshtags:</p>
                                <div className='flex flex-column'>
                              
        
                                                        
                                    {each.tags.map((ele)=>(
                                    <p>{ele}</p>
                                ))}  
                                </div>

                            </div>
                            <div className='flex flex-column w-3/12  text-center'>
                                <p>Duration:</p>
                                <p>{(duration)} {(duration>1)?"Hours":"Hour"} </p>
                            </div>
                            <div className='flex flex-column w-3/12 text-center '>
                                <div className='text-center'>
                                    <p>Price</p>
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
                    )
                }



            </div>
        </>
    )
}

export default Card_Itineraries