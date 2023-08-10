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
            <header className='bg-gray-200'>
                <div class="text-dark fs-3 fw-bold d-flex justify-content-between p-2 mx-1 my-6 ">


                    <div class="nav-item gap-2 flex flex-row">
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
                        <div>
                            <button className="text-dark ms-sm-20 " type="button">MyTinerary </button>
                        </div>
                    </div>

                    <div className='d-flex gap-4 me-sm-8 me-md-18'>
                        <NavBar links={links} directRow={true} />

                        <button className="text-center  fs-4 btn d-flex align-items-center max-h-10 rounded-xl" style={{width: "120px", background: "#7c3aed", color: "white" }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>Login</button>


                    </div>
                </div>



               
               
            </header>
        </>
    )
}
