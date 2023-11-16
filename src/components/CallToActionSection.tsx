"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function CallToActionSection() {
  const router = useRouter();

  return (
    <section className="w-full py-12 bg-[#00dc94]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-row justify-center gap-8">
          <div className="bg-green p-4 rounded-lg border border-gray-300 shadow-md hover:bg-green-400">
            <h2 className="text-4xl font-bold text-black md:text-5xl">
              Ready to get started?
            </h2>
            <p className="mt-2 text-2xl text-black lg:text-2xl">Try LuxFlo today!</p>
          </div>

          <button
            className="bg-green text-black px-8 py-2 rounded-md shadow-lg hover:bg-green-400 font-bold"
            onClick={() => {
              router.push("/dashboard/contract");
            }}
          >
            Create a contract
          </button>
        </div>
      </div>
    </section>
  );
}
