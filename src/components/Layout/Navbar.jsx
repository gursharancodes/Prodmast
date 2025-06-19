import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
];

const Navbar = () => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full bg-white z-50 px-4 md:px-8 py-4 flex items-center justify-between transition-shadow duration-300 ${hasShadow ? 'shadow-md' : ''}`}>            {/* Logo */}
            <div
                onClick={() => navigate("/")}
                className="flex items-center gap-1 cursor-pointer">
                <div>
                    <img src="./logo.png" className='w-9 md:w-11' alt="prodmast-logo" />
                </div>
                <h1 className="text-xl font-extrabold">Prodmast</h1>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-10 font-medium text-[#5c5e64]">
                {navLinks.map(({ label, href, isActive }) => (
                    <li key={label}>
                        <NavLink
                            to={href}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-[#0d1d1f] font-semibold'
                                    : 'hover:text-[#0d1d1f]'
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Desktop Button */}
            <div className="hidden md:block">
                <button
                    onClick={() => navigate("/signup")}
                    type="button"
                    className="bg-[#114046] text-white px-6 py-2.5 rounded-2xl font-medium cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                    Sign Up
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    // Cross Icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 01-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" />
                    </svg>
                ) : (
                    // Hamburger Icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-6 w-48 md:hidden flex flex-col items-start gap-4 transition-all duration-300 ease-in-out">
                    {navLinks.map(({ label, href, isActive }) => (
                        <NavLink
                            key={label}
                            to={href}
                            onClick={() => setIsOpen(false)}
                            className={`block font-medium ${isActive ? 'text-[#0d1d1f] font-semibold' : 'text-[#5c5e64] hover:text-[#0d1d1f]'}`}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <button
                        type="button"
                        onClick={() => {
                            setIsOpen(false)
                            navigate("/signup");
                        }
                        }
                        className="mt-2 bg-[#114046] text-white px-6 py-2 rounded font-medium cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
