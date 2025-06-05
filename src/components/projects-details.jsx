import React from "react";
import { useParams } from "react-router-dom";
import Projects from "./projects.json";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = Projects.projects.find((project) => project.id === id);

  if (!project) {
    return <h1>project not found</h1>;
  }

  return (
    <div class="sm:flex sm:justify-center">
      <div class="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none">
        <Link to={`/projects/${project.id}`}>
          <img src={project.image} alt="" />
        </Link>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            {project.name}
          </h5>
          <p className="mb-4 text-base">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
