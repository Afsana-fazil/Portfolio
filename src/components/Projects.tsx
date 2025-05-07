"use client";

import { useState, useEffect } from "react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const [filteredCategory, setFilteredCategory] = useState("all");

  const filteredProjects =
    filteredCategory === "all"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === filteredCategory
        );

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.remove("animate-fade-in-up");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]); // 👈 depend on filteredProjects to re-attach animation

  return (
    <section id="projects" className="pt-20 lg:pt-44 flex flex-col items-center">
      <div className="text-center">
        <h2 className="relative inline-block text-3xl md:text-4xl font-bold after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-[70%] after:h-[5px] after:bg-purple-600 after:bottom-[-10px]">
          My Projects
        </h2>
        <div className="py-8 md:py-16 flex flex-wrap gap-4 md:gap-9">
          {["all", "ecommerce", "others"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilteredCategory(cat)}
              className="transform hover:scale-110 border border-solid rounded px-4 py-1 border-purple-200 bg-purple-200 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] text-purple-800 font-semibold hover:text-purple-900"
            >
              {cat === "all"
                ? "All"
                : cat === "ecommerce"
                ? "E-Commerce"
                : "Others"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="scroll-animate opacity-0 border border-solid border-purple-300 rounded-3xl transform hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:border-purple-500"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-4 rounded-tl-3xl rounded-tr-3xl"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-md">{project.description}</p>
                <span className="flex flex-wrap gap-5 mt-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm font-bold text-purple-700 bg-purple-100 px-4 py-2 rounded-3xl"
                    >
                      {tech}
                    </span>
                  ))}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>

      <button className="my-20 bg-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transform hover:scale-105">
        View All Projects
      </button>
    </section>
  );
}
