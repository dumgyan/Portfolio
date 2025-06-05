import React from "react";
import Projects from "./projects.json";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const AllProjects = () => {
  return (
      <div>
        <Navbar />
        <h1 className="my-12 text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Recent<span> Work</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {Projects.projects.map((project) => (
          <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-porple-100 border border-2 border-purple-500 rounded-lg shadow-lg hover:-translate-y-2 transition duration-500 p-5">
            <Link to={`/projects/${project.id}`}>
              <img
                src={project.image}
                alt=""
                className="rounded-lg h-64 w-96 "
              />
              <h1 className="pt-5 text-center text-purple-500">{project.name}</h1>
              <p className="text-center">{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default AllProjects;

/* <div key={project.id}>
  <Link to={`/projects/${project.id}`}>
    <img src={project.image} alt="" />
    <h1>{project.name}</h1>
    <p>{Projects.description}</p>
  </Link>
</div>; */
