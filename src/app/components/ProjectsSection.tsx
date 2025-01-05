// @next/next/no-img-element
import React from 'react'
import { ProjectData } from "@/app/data/data"
import Safari from '@/components/ui/safari'


const ProjectsSection = () => {
    return (
        <>
            <section id='projects' className=' max-w-6xl mx-auto antialiased py-10 md:py-20'>
                <h2 className='font-bold text-4xl text-center text-slate-700 capitalize'>Recent&nbsp;

                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">Work.</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Work.</span>
                        </div>
                    </div>
                </h2>

                <div>
                    <p className='text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4'>A look at some of the amazing websites that we&apos;ve built recently.</p>
                </div>

                <div className='relative z-10'>
                    {ProjectData.map((items) =>
                        <div key={items.id} className='py-6 lg:py-10 flex flex-col lg:flex-row  my-20'>
                            <div className='pr-4'>
                                <h1 className='font-bold text-2xl text-slate-800'>{items.title}</h1>
                                <div className='text-sm text-slate-600 max-w-xs mt-4 leading-6'>
                                    <p className='text-sm text-slate-600 max-w-xs mt-4 leading-6'>{items.desc1}</p>
                                    <p className='text-sm text-slate-600 max-w-xs mt-4 leading-6'>{items.desc2}</p>
                                </div>
                                <div className='mt-4 h-px w-6 bg-slate-300'></div>
                                <div className='mt-6'>
                                    <a href={items.link} target='_blank' className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700'>{items.linkTitle}</a>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row mt-10 lg:mt-0 space-y-6 sm:space-y-0 sm:space-x-6 overflow-x-auto flex-1'>
                                <div className='relative w-full h-52 sm:h-72 lg:h-[79%]  sm:w-[50%] lg:w-[85%]  '>
                                    {/* <img src={items.img1} alt="img" loading='lazy' decoding='async' className='transition duration-300 blur-0 object-cover object-left-top rounded-xl ' /> */}
                                    <Safari
                                        url="magicui.design"
                                        className="size-full"
                                        imageSrc={items.img1}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row mt-10 lg:mt-0 space-y-6 sm:space-y-0 sm:space-x-6 overflow-x-auto flex-1'>
                                <div className='relative w-full h-52 sm:h-72 lg:h-[79%]  sm:w-[50%] lg:w-[85%] '>
                                    {/* <img src={items.img2} alt="img" loading='lazy' decoding='async' className='transition duration-300 blur-0 object-cover object-left-top rounded-xl ' /> */}
                                    <Safari
                                        url="magicui.design"
                                        className="size-full"
                                        imageSrc={items.img2}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default ProjectsSection