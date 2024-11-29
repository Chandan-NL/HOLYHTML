import React from "react";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision";
import { HeroData } from "@/app/data/data"


export function HeroSection() {
    return (
        <>
            <section>
                <BackgroundBeamsWithCollision>
                    <div>
                        <h2 className="text-4xl md:text-7xl mt-10 font-bold mb-11 relative text-center text-zinc-700">
                            Build Web App & Websites that&nbsp;
                            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                    <span className="">Makes Sense.</span>
                                </div>
                                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                    <span className="">Makes Sense.</span>
                                </div>
                            </div>
                        </h2>

                        <div className="relative font-regular text-base text-zinc-500 tracking-wide mb-16 text-center max-w-3xl mx-auto antialiased">
                            We build website for your business that actually converts. Wonderfully designed, masterfully created websites and layouts, created by the Professional developers. The ideal beginning stage for your next project.
                        </div>

                        <div className=" w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16 px-2 md:px-8">
                            {HeroData.map((item) =>
                                <div key={item.id} className="grid-card flex flex-row space-x-4 items-start">
                                    <div className="icons-container rounded-xl p-2 border-teal-500 border-2 shadow-sm bg-white"> {React.createElement(item.icon)} </div>
                                    <div className="content-container">
                                        <h2 className="font-bold text-sm text-zinc-700 tracking-wide mb-3">{item.title}</h2>
                                        <h4 className="text-zinc-700 text-sm leading-6 font-normal"> {item.dec} </h4>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center mb-16">
                            <a href="#projects" className="p-[3px] relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                                    Explore Work
                                </div>
                            </a>
                        </div>

                    </div>
                </BackgroundBeamsWithCollision>
            </section>
        </>
    );
}
