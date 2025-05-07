"use client";

import {useEffect} from "react";

export default function Home() {
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
        <section id="home" className="relative my-20 sm:my-40">
            <div className="md:flex md:flex-row-reverse gap-20 items-center justify-between relative">
                <div className="mb-8 md:mb-0">
                    <img src="/assets/Afsana-main.jpeg" alt="main-image" className="w-[450px] rounded-lg opacity-70" />
                </div>
                <div className="flex flex-col justify-center gap-3 opacity-0 slide-down-animate">
                    <h3 className="text-purple-400 text-lg">Hello, I'm</h3>
                    <h1 className="text-purple-200 text-4xl lg:text-5xl font-extrabold tracking-widest">AFSANA F S</h1>
                    <h2 className="text-white text-xl md:text-2xl font-medium tracking-wider">Full-Stack Developer</h2>
                    <p className="text-white text-base tracking-wider leading-7">
                        I create beautiful, responsive web experiences with clean code and <br /> a focus on user experience.
                    </p>
                    <div className="my-5 flex flex-wrap items-center gap-5">
                        <a href="#projects" className="bg-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transform hover:scale-105">View Projects</a>
                        <a href="#contact" className="border border-solid border-purple-600 px-6 py-3 rounded-md font-semibold text-purple-500 hover:bg-purple-600 hover:text-white transform hover:scale-105">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
