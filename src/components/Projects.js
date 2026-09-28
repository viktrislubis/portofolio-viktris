import React from "react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import ProjectsData from "../data/projects";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        {/* Section Title */}
        <div
          id="projects"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            QA Projects & Experience
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            Selected QA Work & Projects
          </p>
        </div>

        {/* Project Cards */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 md:mt-8">
          {ProjectsData.map((project) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={project.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Project Type */}
                {project.type && (
                  <span className="absolute top-3 left-3 px-3 py-1 text-sm font-medium text-white bg-darkblue rounded-full">
                    {project.type}
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5">
                {/* Project Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {project.name}
                </h3>

                {/* Role & Date */}
                <p className="text-sm font-medium text-dark-orange mb-3">
                  {project.role}
                  {project.date && ` • ${project.date}`}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tools */}
                {project.tools && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-darkblue rounded-lg hover:opacity-90 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-darkblue border border-darkblue rounded-lg hover:bg-gray-100 transition"
                    >
                      <FaExternalLinkAlt />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
