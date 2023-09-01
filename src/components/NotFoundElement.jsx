import React from 'react'

const NotFoundElement = ({search}) => {

   const image="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?size=626&ext=jpg&ga=GA1.1.1209193385.1693586697&semt=ais" 
    console.log(search);
  return (
    <div className="flex justify-center items-center  w-4/12  bg-cover bg-center"  style={{
      backgroundImage: `url(${image})`,
      // backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // height: '500px',
    }}>
   
    <h1 className="mx-auto  h3 m-10 w-60 text-center">sorry I couldn't find  <span  className='text-danger' >{search}</span></h1>
     </div>
  )
}

export default NotFoundElement