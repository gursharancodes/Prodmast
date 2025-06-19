import React, { useState } from 'react';
import CTA from '../components/Sections/CTA';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
    };

    return (
        <>
        <section className="bg-[#000000] py-18 md:pb-25 pt-40 text-white px-4 md:px-8 flex items-center justify-center">
            <div className="w-full max-w-md bg-[#1b1b1b] rounded-xl p-8 shadow-lg border border-[#2a2a2a]">
                <h2 className="text-3xl font-extrabold mb-6 text-center">Sign In</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 bg-[#111] border border-[#333] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#114046]"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 bg-[#111] border border-[#333] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#114046]"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm text-[#afafaf]">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="accent-[#114046]"
                            />
                            Remember me
                        </label>
                        <a href="#" className="hover:text-white underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#114046] hover:bg-[#0f3b3c] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-[#afafaf] mt-6">
                    Don’t have an account?{' '}
                    <a href="#" className="text-white underline hover:text-[#00b2a9]">
                        Create one
                    </a>
                </p>
            </div>
            </section>

            <CTA />
        </>
    );
};

export default SignIn;
