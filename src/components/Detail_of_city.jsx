import React from 'react'

const Detail_of_city = () => {
    const background_="../img/park-in-lujiazui-financial-center-shanghai-china.jpg"

    return (
      <div className='d-flex flex-row min-vw-100 justify-center items-center 
       border border-dark border-4   
       shadow  'style={{
        backgroundImage: `url(${background_})`,
       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // height: '500px',
      }}>
      <div className='w-4/12 d-flex flex-column  items-center '>
          <img className='w-6/12 ' src="https://ouch-cdn2.icons8.com/PSMO52ThGHpJ-oh2LstM8_SJBtqv8Ik5Abo2gJjDuik/rs:fit:368:229/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjgv/YzdkYjAyMGQtMDli/ZS00YTAxLWFhZDAt/MTRhZjE1YjgxY2U1/LnBuZw.png" alt="" srcset="" />
          <p className='fs-4 fw-bold text-shadow'>currency USD</p>
        </div>
        <div className=' w-4/12 h-1/12 d-flex flex-column items-center'>
          <img className='w-3/12 d-flex flex-column' src="https://ouch-cdn2.icons8.com/3nwmAfgb7fDly1dDqKl6tPZLQyiB2IC3Gd66ImEOm5w/rs:fit:368:518/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzUw/L2IzYzQzOGFlLWVj/ZGMtNGMyYS1hZGY4/LWNlODYwYWZhNjFm/OC5wbmc.png" alt="" srcset="" />
          <p className='fs-4 fw-bold text-shadow'>Country :Japan</p>
        </div>
        <div className='w-4/12 d-flex flex-column items-center '>
          <img className='w-5/12 ' src='https://ouch-cdn2.icons8.com/VHVHgmKRs0HsdkYZCNPtnHY3DRT6xn3S9WmOM4tCQxs/rs:fit:368:317/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzY2/L2VlYTI0M2JiLTlh/NWMtNGZkNS1hY2Ey/LWI1MjBmMzFmMDhm/OS5zdmc.png' alt=""></img>
          <p className=' fs-4 fw-bold text-shadow'>Lenguage: Japanese</p>
        </div>
      </div>
)}

export default Detail_of_city