import React from "react";

function Testimonials() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 animate-slide-in-left">
          Testimonials
        </h2>
        {/* <p className="text-gray-500 mb-12 animate-slide-in-right">
          What our community is saying
        </p> */}

        <div className="space-y-4 animate-fade-in">
          <blockquote className="text-gray-700 italic">
            &ldquo;LuxFlo has the potential to capture a multi-billion dollar
            market.&ldquo;
            <span className="block font-medium text-gray-900">
              - Silvio Micali
            </span>
          </blockquote>
          {/* Repeat for other testimonials */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
