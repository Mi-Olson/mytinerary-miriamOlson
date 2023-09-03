import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginButton = () => {
  const [login,setLogin]=useState(false)
  const navigate=useNavigate();
  const handleLog = () => {
     setLogin(!login)
    if (!login){
      navigate("/index")
    }  
    }
  return (
    <>
    
    <button onClick={handleLog} className="  fs-4  btn-flat d-flex align-items-center h-[50px]  rounded-xl w-md-75 w-sm-100 text-white p-2 text-center gap-1  bg-gradient opacity-75" >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                        {/* {login ? "Login":"Logout"} */}
                        Login

                        </button>
                               
    </>
  
  )
}

export default LoginButton