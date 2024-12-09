import React from "react";
import { ExternalLink, Github } from "lucide-react";
import ContentMatrixPng from "../assets/ContentMatrix.jpg";
import RoadMapsPng from "../assets/block-builder.jpg";
import SocialConnectPng from "../assets/Social-Air.jpg";
import AntennaDiversity from "../assets/AntennaDiversity.jpg";
import ClipFusion from "../assets/ClipFusion.jpg";
import SusDev from "../assets/SusDev.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  sourceCodeUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ContentMatrix",
    description: "A place where you can get content for any kind of work.",
    imageUrl: ContentMatrixPng,
    sourceCodeUrl: "https://github.com/SHARJIDH/ContentMatrix",
    demoUrl: "https://content-matrix-sharjidhs-projects.vercel.app/",
  },
  {
    id: 2,
    title: "ClipFusion",
    description: "Edit your vedios and images using Ai.",
    imageUrl: ClipFusion,
    sourceCodeUrl: "https://github.com/SHARJIDH/ClipFusion",
    demoUrl: "https://clip-fusion.vercel.app/",
  },

  {
    id: 3,
    title: "Document and BlockBuilder Platform",
    description: "A roadmap and docs platform for your projects.",
    imageUrl: RoadMapsPng,
    sourceCodeUrl: "https://github.com/SHARJIDH/BlockBuider",
    demoUrl: "https://block-buider.vercel.app/",
  },
  {
    id: 4,
    title: "SusDev",
    description:
      "A place where you can get generate environmental firnedly reciepes using ai and also vedios",
    imageUrl: SusDev,
    sourceCodeUrl: "https://github.com/SHARJIDH/SusDev",
    demoUrl: "https://sus-dev.vercel.app/",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A feature-rich social media platform for group communication and collaboration.",
    imageUrl: SocialConnectPng,
    sourceCodeUrl: "https://github.com/SHARJIDH/SocialAir",
    demoUrl: "https://social-air.vercel.app",
  },
  {
    id: 6,
    title: "wireless-communication bpsk",
    imageUrl: AntennaDiversity,
    description:
      "A feature-rich social media platform for group communication and collaboration.",
    sourceCodeUrl: "https://github.com/SHARJIDH/antenna-simulations",
    demoUrl: "https://group5-wireless.vercel.app/",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
    <div className="relative pb-[56.25%] overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute top-0 left-0 w-full h-full object-contain"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <a
          href={project.sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300"
        >
          <Github className="mr-2" size={18} />
          Source Code
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-[#ff8c00] text-white rounded hover:bg-[#e67e00] transition-colors duration-300"
        >
          <ExternalLink className="mr-2" size={18} />
          View Demo
        </a>
      </div>
    </div>
  </div>
);

const AllProjects: React.FC = () => (
  <div className="flex justify-center items-center flex-col container mx-auto px-4 py-8 pt-24 bg-gray-100">
    <h1 className="mb-16 text-5xl  font-sans font-semibold">My Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-32 max-w-6xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default AllProjects;
