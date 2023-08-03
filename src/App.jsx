import Carousel from "./components/Carousel"
import Header from "./layout/Header"

// import './index.css'

function App() {

  return (
    <>
      <Header />
      
      

      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 m-10'>




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
          <div className="max-w-2xl mx-auto min-h-screen flex items-center justify-center ">

          <Carousel />
          </div>




        </div>

      </div>




    </>
  )
}

export default App
