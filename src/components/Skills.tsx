"use client";

import {useEffect} from "react";

const skills = {
    'Frontend Development': [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 90 },
    ],
    'Backend Development': [
      { name: 'PostgreSQL', level: 72 },
      { name: 'Django', level: 78 },
      { name: 'Python', level: 70 },
      { name: 'Django REST Framework (DRF)', level: 65 },
    ],
    'Other Skills': [
      { name: 'Git & GitHub', level: 90 },
      { name: 'UI/UX Design', level: 70 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Performance Optimization', level: 80 },
    ]
  };
  
  export default function Skills() {
    useEffect(() => {
        const elements = document.querySelectorAll(".slide-down-animate");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-in-down");
                entry.target.classList.remove("opacity-0");
              } else {
                entry.target.classList.remove("animate-slide-in-down");
                entry.target.classList.add("opacity-0");
              }
            });
          },
          { threshold: 0.2 }
        );
    
        elements.forEach((el) => observer.observe(el));
    
        return () => elements.forEach((el) => observer.unobserve(el));
      }, []);

    return (
        <section className="md:py-24 mb-20 md:mb-0" id="skills">
            <div className="text-center mb-12">
                <h2 className="relative inline-block text-3xl md:text-4xl font-bold after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-[60%] after:h-[5px] after:bg-purple-600 after:bottom-[-10px]">
                    My Skills
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-[#220030] p-10 rounded-lg hover:shadow-[0_6px_10px_rgba(165,85,247,0.6)] opacity-0 slide-down-animate">
                    <h4 className="text-xl font-semibold mb-2 text-white">{category}</h4>
                    <hr className="border-solid border-purple-500" />
                    <ul className="space-y-3 mt-12 flex flex-col gap-4">
                        {skillList.map((skill, index) => (
                        <li key={index}>
                            <div className="flex justify-between text-md font-medium mb-3">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-purple-500 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                            />
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold text-white mb-8">Tools & Technologies</h3>
                <div className="flex flex-wrap justify-center gap-5">
                    {[
                    'React', 'TypeScript', 'Django', 'Postgresql', 'Git',
                    'Figma', 'Tailwind CSS', 'Next.js', 'Python'
                    ].map((tool, index) => (
                    <div 
                        key={index} 
                        className="px-6 py-3 bg-muted rounded-lg border border-solid border-purple-800/40 font-medium text-gray-300 hover:border-purple-500 hover:text-white transform hover:scale-105"
                    >
                        {tool}
                    </div>
                    ))}
                </div>
            </div>

        </section>
    );
  }
  