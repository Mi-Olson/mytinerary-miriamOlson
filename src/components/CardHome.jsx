import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link as Anchor } from 'react-router-dom';
export default function CardHome() {
    return (
        <>

            <div className=' flex text-dark   items-center  '>

                <div className='flex flex-column p-3 justify-center'>
                    <div className='card-title fw-bold h4'>Find the perfect destination</div>
                    <div className='card-title flex flex-wrap display-7'>
                        Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                    </div>

                    <Anchor  to={'/cities'} className="h-[50px] h6 px-2 btn-flat   rounded-xl w-[100px] flex justify-center col-sm-12 col-md-6 col-lg-6 mt-1 items-center mx-1" >View More</Anchor>

                    {/* <Button className=" btn btn-bd-primary col-sm-12 col-md-6 col-lg-6 mt-1 " variant="flat" >View More</Button> */}
                </div>
            </div>
        </>
    )
}
