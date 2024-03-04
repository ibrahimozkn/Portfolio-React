import { ProjectLink } from "../models/ProjectLink.tsx";

function ProjectCard(props: {
  id: number;
  name: string;
  date: Date;
  description: string;
  photo: string;
  technologiesUsed: string[];
  links: ProjectLink[];
}) {
  let { id, name, date, description, photo, technologiesUsed, links } = props;

  return (
    <div
      key={id}
      className="bg-[#1d2840] rounded p-3 flex items-center space-x-5 shadow-lg"
    >
      <img src={photo} className="h-72 w-auto" />
      <div className="flex flex-col justify-between space-y-5">
        <div>
          <div className="flex items-center justify-between space-x-5">
            <h1 className="text-slate-300 text-xl">{name}</h1>
            <p className="text-slate-300">{date.toLocaleDateString()}</p>
          </div>
          <p className="text-slate-400">{description}</p>
        </div>
        <div>
          <h1 className="text-slate-300">Technologies utilized</h1>
          <div className="flex">
            {technologiesUsed.map((tech) => (
              <p className="text-slate-400 bg-gray-700 rounded p-1 m-1">
                {tech}
              </p>
            ))}
          </div>
          <h1 className="text-slate-300">Links</h1>
          <div className="flex">
            {links.map((link) => (
              <a
                href={link.url}
                className="text-slate-400 bg-gray-700 rounded p-1 m-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
