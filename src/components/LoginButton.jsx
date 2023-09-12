import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import user_actions from '../store/actions/users'
import { useEffect } from 'react'
const {signout}=user_actions


const LoginButton = () => {
  const [login,setLogin]=useState(false)
  const navigate=useNavigate();
  const dispach=useDispatch();
  let photo=useSelector(store=>store.users.user?.photo)
  let name=useSelector(store=>store.users.user?.name)
  // if (name){
  //       setLogin(true)
  //     }
 const islogin = () => { 
   
 if (name){
   setLogin(true)

 } } 

  const handleLog = () => {
   
    //  setLogin(!login)
    if (login){
      dispach(signout)
      setLogin(false)
     
    }  else{
       navigate("/auth/signin")

    }
    }

    useEffect(() => {
   
      islogin()
  
    }, [])
    
    
  return (
    <>
    {login ?(
    <button onClick={handleLog} className="  fs-4  btn-flat d-flex align-items-center h-[50px]  rounded-xl w-md-75 w-sm-100 text-white p-2 text-center gap-1  bg-gradient opacity-75" >
    <div className='flex flex-column w-2/12 m-3 p-1 text-center justify-content-center items-center '>
                                
                                <img width="50" height="50" className="  rounded-circle  " src={photo} alt={"..."} />
                                <p className=' fs-6'>{name}</p>
                                
                            </div>
                            Logout
                       
     
              </button>          ):(<button onClick={handleLog} className="  fs-4  btn-flat d-flex align-items-center h-[50px]  rounded-xl w-md-75 w-sm-100 text-white p-2 text-center gap-1  bg-gradient opacity-75" >
   
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        Login
                        

                        </button>)}
                        

                      
                               
    </>
  
  )
}

export default LoginButton