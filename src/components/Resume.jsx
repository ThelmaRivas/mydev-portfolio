import React from "react";
import resumePDF from "../assets/CV.pdf";

// Resume component with download link and list of skills
const Resume = () => {
  return (
    <main className="container mx-auto py-8 space-y-8 pb-16 sm:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 border-b-4 pb-2 text-slate-600">
          Resume
        </h2>
        <p className="text-lg">
          Download my{" "}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-600 hover:text-blue-800 transition-colors"
          >
            resume
          </a>
        </p>
      </div>

      <div className="mb-8 bg-slate-800 p-8 rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2 text-slate-300">
            Front-end Proficiencies
          </h2>
          <ul className="list-disc pl-4 text-slate-200">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2 text-slate-300">
            Back-end Proficiencies
          </h2>
          <ul className="list-disc pl-4 text-slate-200">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Resume;
