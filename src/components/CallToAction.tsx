"use client";

import { useRouter } from "next/navigation";
import React from "react";

function CallToAction() {
  const router = useRouter();

  
  const buttonStyle = "bg-transparent text-black px-5 py-2 font-semibold rounded hover:bg-transparent";

  return (
    <div className={buttonStyle}>
      <h2 className="text-3xl bg-transparent font-bold mb-4">Ready to get started?</h2>
      <p className="bg-transparent mb-4">Try LuxFlo today!</p>

      {/* Apply the common CSS class to both buttons */}
      <button
        onClick={() => {
          router.push("/dashboard/contract");
        }}
        className={buttonStyle}
      >
        Create a contract
      </button>
    </div>
  );
}

export default CallToAction;
