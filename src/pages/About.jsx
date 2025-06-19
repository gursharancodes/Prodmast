import React from 'react';
import CTA from '../components/Sections/CTA';

const About = () => {

  return (
    <>
      <section className="bg-[#000000] pt-28 md:pt-40 text-white py-18 md:py-25 px-4 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Empowering Modern Manufacturing
          </h2>
          <p className="text-[#afafaf] font-medium mb-6 text-base leading-relaxed">
            At <span className="text-white font-semibold">Prodmast</span>, we redefine efficiency and scalability for manufacturing businesses.
            Our mission is to equip manufacturers with intuitive digital tools that streamline operations, enhance productivity, and unlock new growth opportunities.
          </p>
          <p className="text-[#afafaf] font-medium text-base leading-relaxed">
            With a team driven by innovation and deep industry insight, we’re committed to delivering user-centric solutions that address real-world challenges in industrial environments.
          </p>
        </div>

        {/* About Image or Visual */}
        <div className="flex justify-center">
          <img
            src="./hero.png"
            alt="About Prodmast"
            className="rounded-xl w-full h-auto max-h-[400px] object-cover shadow-lg border border-[#1b1b1b]"
          />
        </div>
      </div>
    </section>

    <CTA/>
  </>
  );
};

export default About;
