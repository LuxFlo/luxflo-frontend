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
      >
        LuxFlo
      </h1>
      <div>
        <Link href="/dashboard" className="px-4">
          Enter App
        </Link>
        <Link href="/team" className="px-4">
          Team
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
