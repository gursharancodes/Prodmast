import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const plans = [
    {
        name: "Essentials Plan",
        description: "Perfect for launching lean operations with essential tools.",
        price: "$39",
        frequency: "/ month",
        features: [
            "Production up to 10,000 units/month",
            "24/7 Technical Support",
            "Access to Real-Time Dashboard",
            "Step-by-Step Setup Guide"
        ],
        highlight: false
    },
    {
        name: "Growth Plan",
        description: "Designed for scaling brands needing advanced support and flexibility.",
        price: "$99",
        frequency: "/ month",
        features: [
            "Unlimited Production Capacity",
            "Dedicated Account Manager",
            "Customized Manufacturing Solutions",
            "AI-Powered Production Optimization"
        ],
        highlight: true
    }
];

const Pricing = () => {
    return (
        <div className="py-16 md:py-28 flex flex-col items-center justify-center px-4 md:px-8 bg-[#000000]">
            <div className="mb-12 text-center text-white flex flex-col items-center gap-4 w-[80vw] md:max-w-4xl">
                <h2 className='text-2xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4'>
                    Tailored Plans for Your<br className='hidden md:block' />Manufacturing Scale
                </h2>
                <p className="text-[#afafaf] font-medium text-sm md:text-base">
                    Flexible pricing for any business size.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full max-w-5xl">
                {plans.map((plan, index) => (
                    <div key={index} className="group">
                        <div
                            className={`relative rounded-xl shadow-lg p-6 md:p-8 mx-auto w-full transform transition-transform duration-300 group-hover:scale-102 ${plan.highlight
                                ? "bg-[#114046] text-white border-2 border-teal-400"
                                : "bg-[#1b1b1b] text-white"
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                            <p className="text-[#cccccc] mb-8">{plan.description}</p>
                            <p className="text-3xl font-extrabold mb-4">
                                {plan.price}
                                <span className="text-[#999999] text-sm font-medium"> {plan.frequency}</span>
                            </p>
                            <ul className="space-y-3 text-[#dddddd] mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-teal-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-white text-[#114046] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition-colors cursor-pointer">
                                {plan.highlight ? "Get Started" : "Select Plan"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
