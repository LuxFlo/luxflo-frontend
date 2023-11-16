import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4 animate-fade-in-up h-28">
      <p>
        © {new Date().getFullYear()} LuxFlo. All rights reserved.
       
      </p>
      <a href="https://docs.google.com/presentation/d/1SARZXqFIe9KMteMeYkZrcECfA_kiAFfk3XvUYY3511Q/edit?usp=sharing" target="_blank" rel="noreferrer">Pitch Deck</a>
    </footer>
  );
}

export default Footer;