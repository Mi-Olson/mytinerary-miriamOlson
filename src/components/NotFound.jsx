import React from 'react'

const NotFound = ({search}) => {
    console.log(search);
  return (
    <h1 className="mx-auto card h1 m-10 w-80 text-center">sorry I couldn't find the city <span>{search}</span></h1>
  )
}

export default NotFound