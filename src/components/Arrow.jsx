import React from 'react'

const Arrow = ({onClick,direction}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="text-black w-[40px] h-[40px] cursor-pointer"
    onClick={onClick}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
  </svg>
  )
}

export default Arrow