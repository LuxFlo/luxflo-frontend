import React from "react";

function HeroSection() {
  return (
    // <div
    //   className="relative bg-white text-black py-24 px-4 flex items-center justify-center"
    //   style={{ height: "80vh" }}
    // >
    //   <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
    //     <img
    //       src="/luxflo_logo.png"
    //       alt="Descriptive Alt Text"
    //       className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mb-8 animate-fade-in"
    //     />
    //     <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
    //       Welcome to LuxFlo
    //     </h1>
    //     <p className="text-xl mb-8 animate-fade-in-down">Luxury Rentals</p>
    //   </div>
    // </div>
    // <div
    //   className="relative bg-blue-500 text-white py-12 md:py-24 flex items-center justify-center"
    //   style={{ height: "60vh", minHeight: "300px" }}
    // >
    //   <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center">
    //     <img
    //       src="/luxflo_logo.png"
    //       alt="Descriptive Alt Text"
    //       className="w-1/2 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mb-4 md:mb-8 animate-fade-in"
    //     />
    //     <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 animate-fade-in-up">
    //       Welcome to LuxFlo!!!
    //     </h1>
    //     <p className="text-md md:text-xl mb-4 md:mb-8 animate-fade-in-down">
    //       Discover our amazing services
    //     </p>
    //     <a
    //       href="#services"
    //       className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
    //     >
    //       Explore More
    //     </a>
    //   </div>
    // </div>
    <div
      className="flex flex-col md:flex-row items-center justify-between space-x-10 bg-white text-black py-12 px-4 md:py-24 md:px-8"
      style={{ minHeight: "60vh" }}
    >
      {/* Image Container */}
      <div className="flex-1 mb-8 md:mb-0">
        <img
          src="/luxflo_logo.png"
          alt="Descriptive Alt Text"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-center lg:items-start">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4">
          Welcome to LuxFlo
        </h1>
        {/* <p className="text-md md:text-lg lg:text-xl mb-6">Luxury Rentals</p> */}
        {/* <a
          href="#services"
          className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Learn More
        </a> */}
      </div>
    </div>
  );
}

export default HeroSection;
