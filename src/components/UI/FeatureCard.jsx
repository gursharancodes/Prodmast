import React from 'react'

const FeatureCard = ({ icon, heading, text }) => {
    return (
        <>
            <div className='flex flex-col gap-6 md:gap-10 bg-[#13464e] text-white shadow-xl rounded-lg p-4 py-6 md:p-8 hover:-translate-y-1 transition-all duration-300 ease-in-out group'>
                <div className='flex items-center justify-between '>
                    {/* icon */}
                    {icon ? (
                        <div>
                            {icon}
                        </div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-8">
                            <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    )}

                    {/* arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
                        <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* heading and text */}
                <div className='flex flex-col gap-1.5 md:gap-3'>
                    <h2 className='text-xl md:text-2xl font-bold'>{heading}</h2>
                    <p className='text-[#cccccc] text-sm md:text-base'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default FeatureCard