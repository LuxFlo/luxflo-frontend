import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-6 bg-[#00dc94] text-black">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
        style={{ textShadow: "0 0 50px #00dc94" }} 
      >
        LuxFlo
      </h1>
      <div>
        <Link href="/dashboard" className="px-10 font-bold">
          <span style={{ textShadow: "0 0 50px #00dc94" }}>Enter App</span> 
        </Link>
        <Link href="/team" className="px-10 font-bold">
          <span style={{ textShadow: "0 0 100px #00dc94" }}>Team</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
