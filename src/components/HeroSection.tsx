import React from "react";

function HeroSection() {
  return (
    // <div className="text-center p-20 bg-black text-white">
    //   <h2 className="text-5xl font-bold mb-4">HobbyFlo</h2>
    //   <p className="text-xl">Crypto Collateralized Rentals</p>
    // </div>
    <div
      className="relative bg-white text-black py-24 px-4 flex items-center justify-center"
      style={{ height: "80vh" }}
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
        <img
          src="/luxflo_logo.png"
          alt="Descriptive Alt Text"
          className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mb-8 animate-fade-in"
        />
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
          Welcome to LuxFlo
        </h1>
        <p className="text-xl mb-8 animate-fade-in-down">Luxury Rentals</p>
        {/* <a
          href="#services"
          className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full"
        >
          Explore More
        </a> */}
      </div>
    </div>
  );
}

export default HeroSection;
