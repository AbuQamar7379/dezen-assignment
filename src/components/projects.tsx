import IndoorProjects from "../assets/indoor-projects.jpeg";
import OutdoorProjects from "../assets/outdoor-projects.jpeg";
import EventProjects from "../assets/event-projects.jpeg";

import { ProjectCard } from "./project-card";

export const Projects = () => {
  const projects: {
    cardImage: string;
    label: string;
  }[] = [
    {
      cardImage: IndoorProjects,
      label: "Indoor Projects",
    },
    {
      cardImage: OutdoorProjects,
      label: "Outdoor Projects",
    },
    {
      cardImage: EventProjects,
      label: "Event Projects",
    },
  ];
  return (
    <div className="bg-[#F4F4F4] w-full">
      <div id="projects" className="w-full p-8 lg:p-20 space-y-10">
        <p className="uppercase font-bold text-lg text-[#DF573E] border-l-[6px] border-[#DF573E] pl-2">
          Projects
        </p>
        <h1 className="uppercase font-bold text-4xl">
          Explore Our Projects in Action
        </h1>
        <div className="flex justify-between items-center px-10">
          {projects.map((project) => (
            <ProjectCard key={project.label} cardData={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
