"use client"
import React, { useState } from 'react'
import { BackgroundBeams } from './ui/background-beams'


const NewSection = () => {
    return (
        <>
            <section>
                <div className="relative rounded-2xl bg-slate-800   mb-20 mt-20 text-gray-100 max-w-6xl  xl:mx-auto min-h-96 h-full  overflow-hidden pb-4">
                    <div className='absolute inset-0 top-0  bg-grid-slate-700/50 sm:h-[5rem]'></div>

                    <div className='lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20'>
                        <div className='text-center lg:text-left'>
                            <h2 className='text-2xl md:text-4xl font-bold my-12 text-center'> Build awsome website with HOLYHTML!</h2>
                            <div className='flex items-center justify-center text-center my-8'>
                                <p className=' text-base text-gray-300 md:text-lg tracking-wide font-light max-w-lg mx-auto"'>Road to freedom starts from here.</p>
                            </div>
                            <div className='flex justify-center'>
                                {/* <a href="#" className="flex justify-center rounded-lg text-sm font-bold py-3 px-4 bg-white/0 text-white ring-1 ring-slate-100 hover:bg-white/25 hover:ring-slate-900/15 mx-4">Contact Us</a> */}

                                <a className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear cursor-pointer">
                                    <div className='flex gap-2'>
                                        <span>Our Approch</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <BackgroundBeams />
                </div>
            </section>
        </>
    )
}

export default NewSection