import React from 'react'
import CardCity from './CardCity'
export default function Carousel() {
  var data = [
    { id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: 'america2', city: "New York", photo: "/img/america/newyork.jpg" },
    { id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
    { id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: 'asia1', city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: 'asia2', city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: 'asia3', city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: 'asia4', city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: 'europe1', city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: 'europe2', city: "London", photo: "/img/europe/london.jpg" },
    { id: 'europe3', city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: 'europe4', city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: 'oceania1', city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: 'oceania2', city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: 'oceania3', city: "Suva", photo: "/img/oceania/suva.jpg" },
    { id: 'oceania4', city: "Wellington", photo: "/img/oceania/wellington.jpg" }
  ]






  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide bg-gray-400 rounded" data-bs-ride="carousel">
        <div className="carousel-inner ">
          
          <div className="carousel-item active container" >
            <div className="flex  flex-wrap justify-center mt-1">

              {data.slice(0, 4).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each.id}
                  text={each.city}
                />
              ))}
            </div>

          </div>
          <div className="carousel-item">

            <div className="flex  flex-wrap justify-center mt-1">

              {data.slice(4, 8).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each.id}
                  text={each.city}
                />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="flex  flex-wrap justify-center mt-1">

              {data.slice(8, 12).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each.id}
                  text={each.city}
                />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="flex  flex-wrap flex-sm-column flex-md-row  flex-lg-row justify-center mt-1">

              {data.slice(12, 16).map((each, index) => (
                <CardCity
                  key={index}
                  photo={each.photo}
                  alt={each.id}
                  text={each.city}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}
