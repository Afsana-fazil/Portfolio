"use client";

import {useEffect} from "react";

export default function About() {
    useEffect(() => {
        const elements = document.querySelectorAll(".slide-animate");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-slide-in-left");
                entry.target.classList.remove("opacity-0");
              } else {
                entry.target.classList.remove("animate-slide-in-left");
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
        <section id="about" className="flex flex-col items-center gap-12 lg:gap-20">
            <h3 className="relative inline-block text-3xl md:text-4xl font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[65%] after:h-[5px] after:bg-purple-600 after:bottom-[-10px]">About Me</h3>
            <div className="lg:flex lg:justify-between items-center gap-10 xl:gap-40">
                <div className="mb-8 lg:mb-0 text-center hidden lg:block">
                    <img src="/assets/Afsana.jpeg" alt="about-image" className="w-[600px] h-[500px] rounded-lg mx-auto" />
                </div>
                <div className="w-full opacity-0 slide-animate">
                    <p className="text-lg md:tracking-wider md:leading-10 ">Hello! I’m Afsana, a passionate full-stack 
                        developer with a strong interest in design and technology. I enjoy building clean, 
                        user-friendly websites and applications.I started learning coding recently and I'm 
                        exploring HTML, CSS, JavaScript, Python, and frameworks like Django and Next.js. 
                        I love combining design and code to create great digital experiences.
                        <br />
                        <br />
                        I build modern, responsive websites that combine clean design with seamless functionality. 
                        As I grow in full-stack development, I’m drawn to intuitive frameworks like React and 
                        Tailwind CSS that help bring ideas to life efficiently and beautifully.
                        <br />
                        <br />
                        Beyond the screen, I’m always exploring fresh tech concepts, honing new skills, and creating 
                        projects that blend creativity with purpose.
                    </p>
                </div>
            </div>
        </section>
    )
  }
  



