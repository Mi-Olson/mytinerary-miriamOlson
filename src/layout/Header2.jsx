import React from 'react'

export default function Header2() {
    return (
        <>
            <header className='bg-gray-200'>
                <div class="text-dark fs-3 fw-bold d-flex justify-content-between p-2 mx-1 my-6 ">


                    <div class="nav-item">
                        <button className="text-dark ms-sm-20 " type="button">MyTinary </button>
                    </div>

                    <div className='d-flex gap-4 me-sm-8 me-md-18'>

                        <button className="text-dark fs-4 text-center" type='button' >Home</button>

                        <button className="text-dark fs-4 text-center" type='button' >Cities</button>



                        <button className="text-center btn d-flex align-items-center" style={{ background: "#7c3aed", color: "white" }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>Login</button>


                    </div>
                </div>



                <div class="text-dark fs-3 fw-bold d-flex  flex-column justify-content-start p-2 mx-1 my-6 d-sm-none d-md-block d-lg-block">
                    <div class="nav-item">
                        <div className='flex flex-row gap-3'>
                            <div>
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
                            <div>
                                <button className="text-dark ms-sm-20 " type="button">MyTinary </button>
                            </div>
                        </div>
                        </div>
                        <div className='d-flex gap-4 me-sm-8 me-md-18 sm-block d-md-none d-lg-none flex-column '>

                            <button className="text-dark fs-4 text-center sm-block d-md-none d-lg-none" type='button' >Home</button>

                            <button className="text-dark fs-4 text-center sm-block d-md-none d-lg-none" type='button' >Cities</button>



                            <button className="text-center btn d-flex align-items-center sm-block d-md-none d-lg-none" style={{ background: "#7c3aed", color: "white" }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>Login</button>


                        </div>
                    </div>
            </header>
        </>
    )
}
