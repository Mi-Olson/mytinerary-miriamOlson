
// import './index.css'

function App() {

  return (
    <>


      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 m-10'>

        <div className="flex items-center justify-between border-b  p-3">
          {/* <div className="flex items-center space-x-2 rounded bg-gray-100 py-1 px-2 text-slate-500 shadow-md"> */}
          <div className="text-lg font-bold text-black ml-10">My Tinary</div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
              <span>My Tinary</span> */}

          {/* </div> */}

          <div className="flex items-center space-x-5 text-black">

            <button className="text-lg font-bold ">Home</button>
            <button className="text-lg font-bold">Cities</button>
            <div className="flex flex-row bg-violet-600  font-bold text-white px-4 py-2 rounded-md w-1/2">

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-2">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
              </svg>


              <button className="bg-violet-600  font-bold  px-4 py-2 rounded-md w-1/2">Login</button>
            </div>

            {/* <div className="flex items-center space-x-2 rounded bg-gray-100 py-1 px-2 text-slate-500 shadow-md">LOGIN</div>
             */}


          </div>
        </div>


        <div className="bg-gray-100 flex flex-row mx-20 items-center justify-center">
          <div className="max-w-2xl mx-auto min-h-screen flex items-center justify-center ">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">

              <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Find the perfect destination</h1>
              <p className="text-sm text-gray-600 text-justify mt-8 mb-6">Al unirte a nuestro programa de fidelización y tokenización de puntos, conseguirás obtener puntos con cada compra y canjearlos por descuentos exclusivos, regalos especiales o convertirlos en criptomonedas.</p>
              <div className="flex justify-right space-x-4 my-4">
                <button className="bg-violet-600 text-white px-4 py-2 rounded-md w-1/2">View More</button>

              </div>


            </div>
          </div>

          {/* <!-- component -->
<!-- This is an example component --> */}
          <div className="max-w-2xl mx-auto">

            <div id="default-carousel" className="relative" data-carousel="static">
              {/* <!-- Carousel wrapper --> */}
              <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                  <img src="https://drive.google.com/uc?export=view&id=1k7U6fYK4jJqX5zj6s7IkduuS-zkJzU-z" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://drive.google.com/uc?export=view&id=1k7U6fYK4jJqX5zj6s7IkduuS-zkJzU-z" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://drive.google.com/uc?export=view&id=1k7U6fYK4jJqX5zj6s7IkduuS-zkJzU-z" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
              </div>

              
              {/* <!-- Slider indicators --> */}
              <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                  <span className="hidden">Previous</span>
                </span>
              </button>
              <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  <span className="hidden">Next</span>
                </span>
              </button>
            </div>

            <p className="mt-5 text-white">This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
              more
              by going to the official 
            </p>
           
          </div>














        </div>

      </div>




    </>
  )
}

export default App
