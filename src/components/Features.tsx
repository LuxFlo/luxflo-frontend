import React from "react";

function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
          Our Features
        </h2>
        {/* <p className="text-gray-500 mb-12 animate-fade-in">
          HobbyFlo's unparalled ease of use
        </p> */}

        <div className="flex flex-wrap justify-center">
          <div className="p-4 animate-fade-in-up">
            <h3 className="text-lg font-medium text-gray-700">
              A.I. Arbitration
            </h3>
            <p className="text-gray-500">
              Arbitration assistance provided by A.I.
            </p>
          </div>
          <div className="p-4 animate-fade-in-up">
            <h3 className="text-lg font-medium text-gray-700">
              Peer-to-Peer Escrow
            </h3>
            <p className="text-gray-500">No middlemen</p>
          </div>
          <div className="p-4 animate-fade-in-up">
            <h3 className="text-lg font-medium text-gray-700">
              All ASA's are supported
            </h3>
            <p className="text-gray-500">That includes USDCa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
