"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Neon Finance",
    category: "Fintech App",
    image: "bg-gradient-to-br from-blue-600 to-indigo-900",
  },
  {
    title: "EcoSphere",
    category: "Sustainability Platform",
    image: "bg-gradient-to-br from-green-500 to-emerald-900",
  },
  {
    title: "Aura Architect",
    category: "Portfolio Website",
    image: "bg-gradient-to-br from-purple-500 to-pink-900",
  },
  {
    title: "Quantum Dashboard",
    category: "SaaS Analytics",
    image: "bg-gradient-to-br from-cyan-500 to-blue-900",
  },
  {
    title: "Luxe Realty",
    category: "Real Estate",
    image: "bg-gradient-to-br from-orange-400 to-red-900",
  },
  {
    title: "CyberGuard",
    category: "Cybersecurity",
    image: "bg-gradient-to-br from-slate-600 to-black",
  },
];

export default function Work() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Selected Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of our finest digital craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image / Gradient */}
              <div className={`absolute inset-0 ${project.image} transition-transform duration-700 group-hover:scale-110`}></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform -translate-y-2 group-hover:translate-y-0 text-sm tracking-wider uppercase">
                  {project.category}
                </p>
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-bold text-white mb-0">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
            <Link href="/contact" className="inline-block px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300">
                Start a Project
            </Link>
        </div>
      </div>
    </div>
  );
}
