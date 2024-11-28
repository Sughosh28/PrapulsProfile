const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-10 text-center px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="mb-6 lg:mb-0 lg:w-1/2">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="font-semibold text-green-300">Prapul Gowda B L</span>
          </h1>

          <p className="text-lg sm:text-xl mb-6">
            A dedicated horticulture professional with expertise in sustainable agriculture, crop management, and soil analysis.
          </p>
          <a
            href="/Prapul_Resume.pdf"
            download="Prapul_Resume.pdf"
            className="inline-block py-3 px-6 text-lg font-semibold bg-green-300 text-black rounded-full hover:underline decoration-black hover:bg-green-400 transition-all duration-300"
          >
            My Resume
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="/myImage.jpg"
            alt="Profile"
            className="rounded-full w-48 h-48 md:w-56 md:h-56 border-4 border-green-300 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
