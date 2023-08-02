import React from 'react'

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b  p-3">
        
    <div className="text-lg font-bold text-black ml-10">My Tinary</div>
   

    <div className="flex items-center space-x-5 text-black">

      <button className="text-lg font-bold ">Home</button>
      <button className="text-lg font-bold">Cities</button>
      <div className="flex flex-row bg-violet-600  font-bold text-white h-10 items-center justify-center p-2 rounded-md w-1/2">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>


        <button className="bg-violet-600  font-bold  px-4 py-2 rounded-md w-1/2">Login</button>
      </div>

      {/* <div className="flex items-center space-x-2 rounded bg-gray-100 py-1 px-2 text-slate-500 shadow-md">LOGIN</div>
       */}


    </div>
  </header>
  )
}


