import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function CardHome() {
    return (
        <>
            {/* <Card  className="container  " > */}
           <div className=' flex text-dark   items-center  '>
            {/* <div className="card text-bg-dark col-sm-12 col-md-6 col-lg-3 items-center p-2 "> */}
                <div className='flex flex-column p-3 justify-center'>
                    <div className='fs-4 card-title fw-bold '>Find the perfect destination</div>
                    <div className='card-title flex flex-wrap '>
                        Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                    </div>



                    <Button className=" btn btn-bd-primary col-sm-12 col-md-6 col-lg-6 " variant="flat" >View More</Button>
                </div>
    </div> 
            </>
    )
}
