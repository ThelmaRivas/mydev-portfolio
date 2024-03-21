import React from "react";

// Project component that renders a project with title, image, and links to deployed and GitHub
// Style is applied using Tailwind CSS
const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project border p-4 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4" />
      <div className="flex justify-center">
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 font-semibold mr-4 opacity-80 transition-opacity duration-300 hover:opacity-100 hover:text-indigo-900"
        >
          View Deployed
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 font-semibold mr-4 opacity-80 transition-opacity duration-300 hover:opacity-100  hover:text-indigo-900"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
