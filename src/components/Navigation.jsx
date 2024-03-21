import React from "react";
import { NavLink } from "react-router-dom";

// Navigation component that renders the navigation links for the portfolio
// Styled using Tailwind CSS
// Use the NavLink component from React Router to create links to different pages in the portfolio
const Navigation = () => {
  return (
    <nav className="">
      <ul className="md:flex md:space-x-6">
        <li>
          <NavLink
            to="/about"
            activeClassName="active"
            className=" px-3 py-2 font-medium text-slate-700 hover:bg-indigo-900 hover:text-slate-200 rounded-md transition-colors sm:block"
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            activeClassName="active"
            className=" px-3 py-2 font-medium text-slate-700 hover:bg-indigo-900 hover:text-slate-200 rounded-md transition-colors sm:block"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active"
            className=" px-3 py-2 font-medium text-slate-700 hover:bg-indigo-900 hover:text-slate-200 rounded-md transition-colors sm:block"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            activeClassName="active"
            className=" px-3 py-2 font-medium text-slate-700 hover:bg-indigo-900 hover:text-slate-200 rounded-md transition-colors sm:block"
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
