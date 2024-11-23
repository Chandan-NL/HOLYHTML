import React from 'react'

const BgHoverGrid = () => {
    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 ">
                    <defs>
                        <pattern id=":Rkqpuja:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#:Rkqpuja:)"></rect>
                    <svg x="50%" y="16" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                    </svg>
                </svg>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100" ></div>
            <div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100" >
                <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 ">
                    <defs>
                        <pattern id=":R5kqpuja:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                            <path d="M.5 56V.5H72" fill="none"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R5kqpuja:)"></rect>
                    <svg x="50%" y="16" className="overflow-visible">
                        <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
                        <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                    </svg>
                </svg>
            </div>
        </div>
    )
}

export default BgHoverGrid