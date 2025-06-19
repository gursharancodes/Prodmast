import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='py-16 md:py-28 px-4 md:px-12 text-center flex flex-col items-center'>
                <h2 className='text-2xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4'>
                    Transform Ideas Into Production—Fast
                </h2>
                <p className='text-[#5f5f5f] font-medium text-base md:text-lg max-w-2xl'>
                    Accelerate time-to-market with our agile manufacturing platform. Cut downtime, reduce costs, and launch at speed. Limited-time offer available.
                </p>

                {/* button */}
                <div
                    onClick={() => {
                        navigate("/contact")
                    }}
                    className='border-2 border-[#114046] bg-[#114046] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-[#114046] font-medium mt-8 cursor-pointer flex items-center justify-center gap-2'>
                    <button >
                        Get Started
                    </button>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>

            </div>

        </>
    )
}

export default CTA