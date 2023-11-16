import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function HeroSection() {
  const router = useRouter();

  return (
    // <div
    //   className="bg-cover bg-center py-24 px-4 md:px-8 opacity-10"
    //   style={{ backgroundImage: "url('hero_bg.png')" }}
    // >
    //   <div className="container mx-auto text-center">
    //     <div className="max-w-2xl mx-auto bg-[#00dc94] bg-opacity-100 rounded p-8 md:p-12 shadow-2xl">
    //       <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
    //         Welcome to LuxFlo
    //       </h1>
    //       <p className="text-lg md:text-xl text-gray-700 mb-8">
    //         Luxury Rentals
    //       </p>
    //       <Link
    //         href="/dashboard"
    //         className="inline-block bg-white text-black font-bold py-3 px-6 rounded hover:bg-black transition duration-300"
    //       >
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="relative py-24 px-4 md:px-8">
      {/* Background Image with Light Opacity */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-10"
        style={{
          backgroundImage: "url('luxflo_logo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto text-center relative">
        <div className="max-w-2xl mx-auto bg-white bg-opacity-80 rounded p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-7xl font-bold text-black mb-6">
            LuxFlo
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            Crypto-Collateralized Luxury Rentals
          </p>
          {/* <Link
            href="/dashboard"
            className="inline-block bg-[#00dc94] text-black font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link> */}
          <button
            className="bg-white text-black px-8 py-2 rounded-md shadow-lg hover:bg-green-200 font-bold"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
