import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
 
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" }
    ];

    return (
        <footer className="bg-[#000000] text-white">
            <div className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {/* Logo & About */}
                    <div className="space-y-4">
                        <div
                            onClick={() => navigate("/")}
                            className="flex items-center gap-1 cursor-pointer">
                            <div>
                                <img src="./logo.png" className='w-11' alt="prodmast-logo" />
                            </div>
                            <h1 className="text-xl font-bold">Prodmast</h1>
                        </div>
                        <p className="text-[#afafaf] text-sm md:text-base font-medium leading-relaxed">
                            Our solutions empower businesses to unlock the full potential of their manufacturing operations.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `text-sm md:text-base font-medium transition-colors duration-200 ${isActive ? 'text-[#ffffff] underline' : 'text-[#afafaf] hover:text-white'
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Products</h2>
                        <ul className="space-y-2">
                            {[
                                'Manufacturing Execution System',
                                'Enterprise Resource Planning',
                                'Quality Management System',
                                'Supply Chain Planning'
                            ].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="text-[#afafaf] hover:text-white text-sm md:text-base font-medium transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-[#afafaf] text-sm md:text-base font-medium underline hover:text-white transition-colors duration-200">
                            <a href="mailto:hello@prodmast.com">hello@prodmast.com</a>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-10 border-[#2d2d2d]" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                    <p className="text-[#afafaf] text-sm md:text-base font-medium">
                        Designed by {' '}
                        <a
                            href="https://dribbble.com/shots/24788574-Prodmast-Manufacturing-Landing-Page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white transition-colors duration-200"
                        >
                            Dipa Inhouse
                        </a>
                        .
                    </p>
                    <p className="text-[#afafaf] text-sm md:text-base font-medium">
                        Developed with ❤️ by{' '}
                        <a
                            href="https://github.com/gursharancodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white transition-colors duration-200"
                        >
                            GursharanCodes
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
