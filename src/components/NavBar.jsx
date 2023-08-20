import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'

import { NavLink } from 'react-router-dom'


export default function NavBar({ links, directRow }) {




   return (


      <>
         {directRow ?
            <div className="hidden md:flex  gap-2 ">
               {links.map((each, key) =>
                  // <NavLink key={key} to={each.value} className={({ isActive, isPending }) => isPending ? "btn-flat " : isActive ? "text-white w-200 h6 text-center p-1 bg-secondary  rounded-xl max-h-20 " : "btn-flat"}   >{each.content}</NavLink>
                 
                 <NavLink key={key} to={each.value} className={({ isActive, isPending }) => isPending ? "border border-secondary text-dark fs-4 text-center p-1  bg-red rounded-xl  max-h-20 " : isActive ? "h-[50px]  rounded-xl w-[110px] text-white  fs-4 text-center p-1 bg-secondary  " : " h-[50px] fs-4  rounded-xl w-[110px] border border-secondary text-dark  text-center p-1 "}   >{each.content}</NavLink>
               )}

            </div> :
            <div className='d-flex gap-2 mt-2 sm-block d-md-none d-lg-none flex-column '>
               {links.map((each, key) =>
                  <NavLink key={key} to={each.value} className={({ isActive, isPending }) => isPending ? "border border-secondary text-dark fs-4 p-1 text-center sm-block d-md-none d-lg-none rounded-xl max-h-10" : isActive ? "h-[50px]  rounded-xl w-[110px] text-white p-1 bg-secondary fs-4 text-center sm-block d-md-none d-lg-none " : " h-[50px]  rounded-xl w-[110px] border border-secondary text-dark fs-4 p-1 text-center sm-block d-md-none d-lg-none "}   >{each.content}</NavLink>
               )}
            </div>




         }
      </>

   )
}


