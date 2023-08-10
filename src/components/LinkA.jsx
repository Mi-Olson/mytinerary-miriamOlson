import React, { useState } from 'react'
import { Link as Anchor } from 'react-router-dom' 

const LinkA = (props) => {
    const {value,content,active}=props
    
  return (
    <>
   {console.log(content)}
    {/* <Anchor to={value} className="text-dark fs-4 w-6 text-center"   >{content}</Anchor> */}
    <Anchor  to={value} className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1" style={{backgroundColor:each.backgroundColor,color:each.color }}>{content}</Anchor>

   
    </>
  )
}

export default LinkA