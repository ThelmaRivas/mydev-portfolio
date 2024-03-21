// Import all project images
import React from "react";
import Project from "./Project.jsx";
import ToDone from "../assets/ToDone.jpg";
import NoteTaker from "../assets/NoteTaker.png";
import CAPIII from "../assets/CAPIII.png";
import StayFit from "../assets/StayFit.png";

// Portfolio component that displays a list of projects in a grid layout with images and links to deployed and GitHub repositories.
const Portfolio = () => {
    // Projects array 
    const projects = [
    {
      title: "ToDone App",
      image: ToDone,
      deployedLink: "https://todonevf-6aecf37fb01a.herokuapp.com/",
      githubLink: "https://github.com/zaort/todone",
    },
    {
      title: "Stay Fit App",
      image: StayFit,
      deployedLink: "https://andatax.github.io/StayFit/",
      githubLink: "https://github.com/Andatax/StayFit",
    },
    {
      title: "Note Taker App",
      image: NoteTaker,
      deployedLink: "https://fany-notes-2974d2f618f8.herokuapp.com/",
      githubLink: "https://github.com/ThelmaRivas/mynotes",
    },
    {
      title: "CAPIII App",
      image: CAPIII,
      deployedLink: "https://project4.com",
      githubLink: "https://github.com/zaort/capiii",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto py-8 pb-16 sm:px-8">
      <h2 className="text-3xl font-bold border-b-4 pb-2 mb-8 text-slate-600">
        Portfolio
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Map through the projects array and render a Project component for each project. */}
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
