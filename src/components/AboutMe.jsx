import React from "react";
import profileImage from "../assets/profile.jpg";

// AboutMe component that displays my name, image, and bio information 
// Styled with Tailwind CSS 
const AboutMe = () => {
  return (
    <div className="container mx-auto py-8 space-y-8 sm:px-8 pb-20">
      <h2 className="text-3xl font-bold border-b-4 pb-2 text-slate-600">
        About Me
      </h2>
      <img
        src={profileImage}
        alt="Profile Picture"
        className="rounded-full h-40 w-40 object-cover shadow-lg"
      />
      <p className="text-slate-600 font-medium text-lg leading-8 pt-4">
        {" "}
        Hello, I'm Thelma Rivas, a passionate full-stack developer dedicated to
        crafting meaningful and innovative digital solutions. With a good
        foundation in coding and a continuous drive for self-improvement, in
        order to further enhance my skills and knowledge in web development I
        completed a rigorous 6-month bootcamp in Full-Stack Web Development,
        imparted by edX and Tecnologico de Monterrey. I approach each day with a
        commitment to learning, growth, and the pursuit of every day
        improvement, leveraging my technical expertise to create impactful and
        user-centric applications. I thrive on the challenges of problem-solving
        and the collaborative nature of development, constantly seeking new
        opportunities to expand my proficiency and contribute to exciting
        projects. My journey as a developer is driven by a relentless curiosity
        and a deep-seated passion for transforming ideas into scalable, elegant,
        and efficient solutions.
      </p>
    </div>
  );
};

export default AboutMe;
