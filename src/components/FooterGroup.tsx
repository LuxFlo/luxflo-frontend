import Link from "next/link";
import React from "react";

export default function FooterGroup() {
  return (
    <footer className="flex justify-between items-center bg-black text-white py-12 px-6">
      <div className="text-lg font-bold mx-6">
        © {new Date().getFullYear()} LuxFlo. All rights reserved.
      </div>
      <div className="space-x-4 mx-6">
        <Link
          className="text-lg mx-24"
          target="_blank"
          rel="noreferrer"
          href="https://youtu.be/XAllCqKfQtg"
        >
          Demo Video
        </Link>
        <Link
          className="text-lg"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/presentation/d/1SARZXqFIe9KMteMeYkZrcECfA_kiAFfk3XvUYY3511Q/edit?usp=sharing"
        >
          Pitch Deck
        </Link>
      </div>
    </footer>
  );
}
