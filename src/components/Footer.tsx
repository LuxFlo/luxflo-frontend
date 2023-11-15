import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 animate-fade-in-up">
      <p>© {new Date().getFullYear()} LuxFlo. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
