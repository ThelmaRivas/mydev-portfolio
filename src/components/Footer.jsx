import React from "react";

// Footer component that displays links to GitHub, LinkedIn, and Stack Overflow in all the pages of the portfolio.
// Styled using Tailwind CSS.
const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-4 ">
      <div className="flex justify-center">
        <a
          href="https://github.com/ThelmaRivas"
          target="_blank"
          rel="noopener noreferrer "
          className="text-gray-300 opacity-50 mx-5 transition-opacity duration-300 hover:opacity-100"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/thelma-rivas-46b0601b5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 opacity-50 mx-5 transition-opacity duration-300 hover:opacity-100"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users/22596801/thelmarivas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 opacity-50 mx-5 transition-opacity duration-300 hover:opacity-100"
        >
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;
