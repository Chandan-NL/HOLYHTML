import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="relative rounded-2xl bg-slate-800   mb-20 mt-20 text-gray-100 max-w-6xl  xl:mx-auto min-h-96 h-full  overflow-hidden pb-4">
                    <div className='absolute inset-0 top-0  bg-grid-slate-700/50 sm:h-[5rem]'></div>

                    <div className='lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20'>
                        <div className='text-center lg:text-left'>
                            <h2 className='text-2xl md:text-4xl font-bold my-4  text-center'> Let's build your website today!</h2>
                            <div className='flex items-center justify-center text-center my-8'>
                                <p className=' text-base text-gray-300 md:text-lg tracking-wide font-light max-w-lg mx-auto"'>Contact us and we will get back within 24 hours. We mean it. You saw the testimonials, right?</p>
                            </div>
                            <div className='flex justify-center'>
                                <a href="#" className="flex justify-center rounded-lg text-sm font-bold py-3 px-4 bg-white/0 text-white ring-1 ring-slate-100 hover:bg-white/25 hover:ring-slate-900/15 mx-4">Contact Us</a>

                                <a className="py-3 px-4 rounded-lg bg-[#1ED760] font-semibold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 mx-4 cursor-pointer">
                                    <div className='flex gap-2'>
                                        <span><SiWhatsapp size={24} /></span>
                                        <span>What's App</span>
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

export default Contact