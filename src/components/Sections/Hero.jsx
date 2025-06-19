import React from 'react'
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='mt-30 md:mt-40 pb-12 md:pb-25 flex flex-col items-center justify-center py-4 px-4 md:px-8'>

                {/* main heading */}
                <div className='text-center flex flex-col items-center gap-2 md:gap-4 w-[80vw] md:max-w-4xl'>
                    <h2 className='text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2'>
                        The Future of Manufacturing with <br className='hidden md:block' /><span className='text-[#114046]'>Latest Technology</span>
                    </h2>
                    <p className='text-[#afafaf] font-[500] text-sm md:text-base'>Expert tech to elevate your manufacturing to the next level.</p>
                </div>

                {/* buttons */}
                <div className='flex items-center justify-center gap-2 md:gap-4'>
                    {/* button */}
                    <button
                        onClick={() => {
                            navigate("/contact")
                        }}
                        className='border-2 border-[#114046] bg-[#114046] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-[#114046] font-medium mt-8 cursor-pointer'>
                        Get Started
                    </button>

                    {/* button */}
                    <button
                        onClick={() => {
                            navigate("/contact")
                        }}
                        className='border-2 border-[#114046] text-[#114046] px-5 py-2.5 md:px-6 md:py-3 rounded-2xl hover:shadow-md font-medium mt-8 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                        Try Demo
                    </button>
                </div>

                {/* rating */}
                <div className='mt-6 md:mt-8'>
                    <div className='flex items-center justify-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E6C200" className="size-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E6C200" className="size-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E6C200" className="size-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E6C200" className="size-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E6C200" className="size-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>

                        <p className='font-medium ml-1.5'>5.0</p>
                    </div>

                    <div className='text-center mt-2 text-[#5c5e64] font-[500]'>
                        <p className='text-sm md:text-base'>from 80+ <span className='text-[#0d1d1f]'>Reviews</span></p>
                    </div>
                </div>

                {/* image */}
                <div className='w-full mt-10 flex items-center justify-center'>
                    <img
                        loading='lazy'
                        className='w-full md:w-[80vw] rounded-2xl shadow-2xl object-cover'
                        src="./hero.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero