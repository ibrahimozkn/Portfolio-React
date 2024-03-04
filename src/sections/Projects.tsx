import React from "react";
import RightArrow from "../assets/rightarrow.svg";
import LeftArrow from "../assets/leftarrow.svg";
import ProjectCard from "../components/ProjectCard.tsx";
import phone from "../assets/phoneapp.png";
function Projects() {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      date: new Date(),
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      photo: phone,
      technologiesUsed: ["React", "Typescript"],
      links: [{ name: "Github", url: "https://github.com" }],
    },
    {
      id: 2,
      name: "Project 1",
      date: new Date(),
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      photo: phone,
      technologiesUsed: ["React", "Typescript"],
      links: [{ name: "Github", url: "https://github.com" }],
    },
    {
      id: 3,
      name: "Project 1",
      date: new Date(),
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      photo: phone,
      technologiesUsed: ["React", "Typescript"],
      links: [{ name: "Github", url: "https://github.com" }],
    },
  ];

  return (
    <section className="min-h-svh" id="projects">
      <div className="mx-auto flex flex-col justify-center items-center max-w-6xl my-20">
        <h1 className="text-slate-400 font-semibold text-7xl">
          My{" "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-500 inline-block text-transparent bg-clip-text">
            Projects
          </span>
        </h1>

        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-5 my-10">
            {projects.map((project) => (
              <ProjectCard {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
