"use client";

import { useRouter } from "next/navigation";
import React from "react";

function CallToAction() {
  const router = useRouter();

  return (
    <div className="bg-[#00dc94] text-black text-center p-12">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-4">Try LuxFlo today!</p>
      <button
        onClick={() => {
          router.push("/dashboard/contract");
        }}
        className="bg-white text-black px-5 py-2 font-semibold rounded hover:bg-gray-100"
      >
        Create a contract
      </button>
    </div>
  );
}

export default CallToAction;
