import { useEffect, useState } from "react";
import model1 from "../assets/model1.png";
import projectData from "../Data/projectData";

const ProjectsSection = () => {
  const [projects, setProjects] = useState(projectData);
  useEffect(() => {
    setProjects(projectData);
  }, [projects]);
  return (
    <section id="projects" className="bg-gray-900 text-white py-12 ">
      <h2 className="text-4xl font-bold text-center mb-5">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((project, index) => (
          <div
            // 9056647991
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-200 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <img src={model1} alt="" className="rounded-full " />
            <p className="text-gray-300 mt-4 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.liveLink}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="text-purple-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
