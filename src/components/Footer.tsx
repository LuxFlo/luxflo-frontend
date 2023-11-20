import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 animate-fade-in-up h-28">
      <p>© {new Date().getFullYear()} LuxFlo. All rights reserved.</p>
      <a
        href="https://docs.google.com/presentation/d/1Ebm-ZqtjhS9Eavl_uu_dRtlz27zB7o3q3PqrsLt5ZVg/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Pitch Deck
      </a>
      <br />
      <a href="https://github.com/LuxFlo/" target="_blank" rel="noreferrer">
        Source Code
      </a>
    </footer>
  );
}

export default Footer;
