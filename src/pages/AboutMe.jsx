import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 px-6 md:px-12"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-green-300 mb-8">
          About Me
        </h2>
        <p className="text-lg sm:text-xl mb-8 animate-fadeIn">
          I'm <span className="font-semibold text-green-300">Prapul Gowda B L</span>, a passionate horticulture professional committed to leveraging my expertise in sustainable agriculture and crop management. With hands-on experience in soil analysis, pest control, and horticulture conservation, I aim to contribute significantly to organizational growth.
        </p>
        <p className="text-lg sm:text-xl mb-8 animate-fadeIn">
          I excel in data collection, analysis, and interpretation, fostering better decision-making in agricultural practices. My goal is to continually advance my skills while working collaboratively with the farming community to promote innovative and sustainable solutions in the agricultural sector.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
