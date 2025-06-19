import React from 'react'
import FeatureCard from '../UI/FeatureCard'

const Features = () => {

    const Features = [
        {
            id: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-7">
                    <path fillRule="evenodd" d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h2.25a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 1 0 1.5H4.5A2.25 2.25 0 0 1 2.25 19.5v-15ZM9 4.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9.75A.75.75 0 0 1 9 4.5Zm0 5.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM9 19.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            ),
            heading: "Production and Assembly",
            text: "We handle the entire production and assembly process, ensuring high quality and efficiency."
        },
        {
            id: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                </svg>
            ),
            heading: "Custom Manufacturing",
            text: "We offer custom product creation with flexible design and customization capabilities."
        },
        {
            id: 3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
            ),
            heading: "Quality Control",
            text: "Robust procedures and systems to guarantee top-tier product quality."
        },
        {
            id: 4,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
            ),
            heading: "Technology and Innovation",
            text: "Harnessing the latest technologies to drive manufacturing innovation and improvement."
        },
        {
            id: 5,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                </svg>
            ),
            heading: "Packaging and Logistics",
            text: "End-to-end packaging and shipping solutions for seamless distribution."
        },
        {
            id: 6,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
            ),
            heading: "Consulting Market Research",
            text: "Insightful consulting to understand market needs and guide strategic decisions."
        }
    ];
    
    

    return (
        <>
            <div className='py-16 md:py-28 flex flex-col items-center justify-center px-4 md:px-8 bg-[#114046]'>

                {/* main heading */}
                <div className='mb-3 md:mb-7 text-center flex flex-col items-center gap-4 w-[80vw] md:max-w-4xl'>
                    <h2 className='text-2xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2 text-white'>
                        Efficient and Integrated <br className='hidden md:block'/>
                        Manufacturing Services
                    </h2>
                    <p className='text-[#afafaf] font-[500] text-sm md:text-base'>Simplify your workflow with our reliable, quality-focused solutions.</p>
                </div>

                {/* feature list */}
                <div className='mt-8 space-y-4'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:px-4'>
                        {Features.map((feature) => (
                            <FeatureCard
                                key={feature.id}
                                icon={feature.icon}
                                heading={feature.heading}
                                text={feature.text}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Features