import React, { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'
import NavBar from './NavBar'
const links = [
    { value: '/', content: 'Home', id: '1', active: true, backgroundColor: 'red', color: 'white' },
    { value: '/cities', content: 'Cities', id: '2', active: false, backgroundColor: 'white', color: 'black' }
]
export default function Header2() {
    const [show, setShow] = useState(false)
    return (
        <>
            <header  >
                <div className="text-dark fs-3 fw-bold d-flex justify-content-between p-2 mx-1 my-6 ">


                    <div className="nav-item gap-2 flex flex-row">
                        <div className='flex flex-column sm-block d-md-none d-lg-none'>
                            <div className='sm-block d-md-none d-lg-none'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-[50px] h-[50px] bg-white p-[5px] rounded-xl cursor-pointer"
                                    onClick={() => setShow(!show)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </div>
                            {show ? <NavBar links={links} directRow={false} /> : null}
                        </div>

                        <div className='ms-sm-5 ms-md-5  ms-lg-5 ms-xl-5'>
                        <img src="../../img/logo.png" width="150" height="50"  className="img-responsive" alt="titulo" />
                            {/* <button className="h-[50px] w-[110px] text-dark ms-sm-20 " type="button">MyTinerary </button> */}
                        </div>
                    </div>

                    <div className='d-flex gap-4 me-sm-8 me-md-18'>
                   
                        <NavBar links={links} directRow={true} />
                      
                    </div>
                </div>





            </header>
        </>
    )
}
