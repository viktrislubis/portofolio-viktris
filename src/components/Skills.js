import React from "react";

import SkillsData from "../data/skills";

const Skills = () => {
  const qaSkills = [
    "Manual Testing",
    "Automation Testing",
    "API Testing",
    "Test Case Design & Execution",
    "Bug Reporting & Documentation",
    "Software Test Documentation",
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mt-5 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        {/* Section Title */}
        <div
          id="skills"
          className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7"
        >
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Skills
          </h1>

          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My QA Expertise
          </p>
        </div>

        {/* QA Skills */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {qaSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Tools */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="false"
          className="px-2 py-6 grid justify-center items-center grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 md:py-5 lg:grid-cols-5 xl:grid-cols-6 border-t-gray-200 border-2 rounded-md md:shadow-md"
        >
          {SkillsData.map((skill, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="false"
                key={index}
                className="flex flex-col w-20 h-20 items-center justify-center md:w-24 md:h-24 lg:m-3 xl:m-5 mx-auto"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="m-2 object-contain w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition duration-700 hover:scale-110"
                />

                <p className="font-medium text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
