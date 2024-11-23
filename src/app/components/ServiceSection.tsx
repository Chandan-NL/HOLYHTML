import { path } from 'framer-motion/client'
import React from 'react'
import BgHoverGrid from './BgHoverGrid'
import { CardData } from "@/app/data/data"

const ServiceSection = () => {
    return (


        <>
            <section id='service' className=' max-w-7xl mx-auto  antialiased py-10 md:py-20'>
                <h2 className='font-bold text-4xl text-center text-slate-700 capitalize'>We handle just about&nbsp;

                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">everything.</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">everything.</span>
                        </div>
                    </div>
                </h2>

                <div>
                    <p className='text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4'>We handle everything from design to deployment to get your website shipped and ready to go!</p>
                </div>


                <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
                    {CardData.map((items) =>
                        <li className="group rounded-2xl border border-gray-200 p-8 relative">
                            <BgHoverGrid />
                            <div className="relative z-10">
                                <span>
                                    {React.createElement(items.icon)}
                                </span>
                                <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased"> {items.title} </h3>
                                <p className="mt-2 text-gray-700 tracking-wide leading-6 antialiased"> {items.desc} </p>
                            </div>
                        </li>
                    )}
                </ul>


            </section >
        </>
    )
}

export default ServiceSection