import React from 'react'
import Button from 'react-bootstrap/Button';

export default function CardHome() {
    return (
        <>

            <div className=' flex text-dark   items-center  '>

                <div className='flex flex-column p-3 justify-center'>
                    <div className='card-title fw-bold display-5'>Find the perfect destination</div>
                    <div className='card-title flex flex-wrap display-6'>
                        Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                    </div>



                    <Button className=" btn btn-bd-primary col-sm-12 col-md-4 col-lg-4 " variant="flat" >View More</Button>
                </div>
            </div>
        </>
    )
}
