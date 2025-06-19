import React from 'react';
import CTA from '../components/Sections/CTA';

const Contact = () => {
    return (
        <>
            <section className="bg-[#000000] pt-28 md:pt-40 text-white py-18 md:py-25 px-4 md:px-8 flex items-center justify-center">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Let's Talk About Your Project
                        </h2>
                        <p className="text-[#afafaf] font-medium mb-8 text-base">
                            Whether you have a question or want to discuss how we can help your manufacturing workflow, our team is ready.
                        </p>

                        <div className="space-y-4 text-sm md:text-base text-[#dddddd]">
                            <p>
                                <span className="font-semibold text-white">Email:</span>{' '}
                                <a href="mailto:hello@prodmast.com" className="underline hover:text-white">
                                    hello@prodmast.com
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold text-white">Phone:</span> +91 12345-67890
                            </p>
                            <p>
                                <span className="font-semibold text-white">Office:</span> 91 Industrial Ave, Bengaluru, IN
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-[#1b1b1b] rounded-xl p-8 space-y-6 shadow-lg">
                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full px-4 py-2 bg-[#111] border border-[#333] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#114046]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 bg-[#111] border border-[#333] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#114046]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Tell us how we can help..."
                                className="w-full px-4 py-2 bg-[#111] border border-[#333] text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#114046]"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="inline-block bg-[#114046] hover:bg-[#0f3b3c] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            <CTA />

        </>
    );
};

export default Contact;
