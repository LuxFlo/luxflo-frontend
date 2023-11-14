import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-[#00dc94] text-black">
      <h1 className="text-xl font-bold">LuxFlo</h1>
      <div>
        <a href="/dashboard" className="px-4">
          Enter App
        </a>
        <a href="/team" className="px-4">
          Team
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
