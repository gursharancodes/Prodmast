import React from 'react'

const Benifits = () => {
    return (
        <>
            <div className='py-16 md:py-28 flex flex-col lg:flex-row items-center justify-center px-4 md:px-12'>
                {/* Left */}
                <div className='w-full lg:w-1/2 lg:pr-20 mb-10 lg:mb-0'>
                    <img src="./hero.png" alt="" className='w-full rounded-2xl shadow-lg' />
                </div>

                {/* Right */}
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h2 className='text-2xl md:text-5xl font-black tracking-tight md:leading-15 mb-4 text-center md:text-left'>
                        Key Benifits of Our System
                    </h2>
                    <p className='text-[#7a7a7a] font-[500] text-sm md:text-base mb-10 text-center md:text-left'>Our system boosts productivity and efficiency, delivering exceptional results.</p>

                    

                    {/* Benefit 1 */}
                    <div className='flex items-start gap-4'>
                        {/* icon */}
                        <div className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#114046" className="size-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* text */}
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg md:text-xl font-bold'>
                                Boosting Quality with Advanced Technology
                            </h3>
                            <p className='text-[#7a7a7a] font-[500] text-sm md:text-base'>
                                Our system leverages cutting-edge technology to enhance product quality, ensuring superior performance and reliability.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className='flex items-start gap-4 mt-8 lg:mt-6'>
                        {/* icon */}
                        <div className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#114046" className="size-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* text */}
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg md:text-xl font-bold'>
                                Streamlined Manufacturing Processes
                            </h3>
                            <p className='text-[#7a7a7a] font-[500] text-sm md:text-base'>
                                Our system streamlines manufacturing processes, enabling faster and more efficient production.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className='flex items-start gap-4 mt-8 lg:mt-6'>
                        {/* icon */}
                        <div className='mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#114046" className="size-6">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                        </div>

                        {/* text */}
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg md:text-xl font-bold'>
                                AI Driven Production
                            </h3>
                            <p className='text-[#7a7a7a] font-[500] text-sm md:text-base'>
                                Our AI-driven production system optimizes workflows, reduces errors, and enhances overall efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benifits