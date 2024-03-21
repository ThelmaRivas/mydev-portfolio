import React from "react";
import Navigation from "./Navigation.jsx";

// Header component that renders the header of the portfolio with the name and navigation links for the portfolio 
// Styled using Tailwind CSS
const Header = () => {
  return (
    <header className="bg-white shadow-lg px-12 md:flex md:justify-between md:items-center md:h-16 md:space-x-6">
      <div className="flex justify-center items-center h-16 md:hidden">
        <h1 className="text-indigo-900 text-2xl uppercase font-bold font-sans tracking-widest">
          Thelma <span className="ml-2">Rivas</span>
        </h1>
      </div>
      <div className="space-y-1 border-t-2 pb-3 pt-2 md:hidden">
        <Navigation />
      </div>
      <div className="hidden md:flex">
        <h1 className="text-indigo-900 text-2xl uppercase font-bold tracking-widest">
          Thelma <span className="ml-1">Rivas</span>
        </h1>
      </div>
      <div className="hidden md:flex">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
