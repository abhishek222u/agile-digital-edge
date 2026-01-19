"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <Search size={28} />,
    title: "Understand Your Vision",
    desc: "We start by understanding your business goals, challenges, and expectations to align our approach with your vision.",
    color: "bg-blue-500",
  },
  {
    icon: <PenTool size={28} />,
    title: "Research & Analysis",
    desc: "Our team analyzes your industry, competitors, and target audience to identify opportunities and define the right direction.",
    color: "bg-purple-500",
  },
  {
    icon: <Code2 size={28} />,
    title: "Design & Development",
    desc: "We transform ideas into functional designs and scalable solutions using the latest technologies and best practices.",
    color: "bg-green-500",
  },
  {
    icon: <Rocket size={28} />,
    title: "Testing & Delivery",
    desc: "Before launch, we rigorously test everything to ensure quality, performance, and a smooth final delivery.",
    color: "bg-orange-500",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".process-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-dark-blue relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Working Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A precise, agile workflow designed to deliver excellence at every stage.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="process-line absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-orange-500/20 hidden md:block rounded-full origin-left"></div>

          {steps.map((step, index) => (
            <div key={index} className="process-step relative flex flex-col items-center text-center">
              <div className={`w-24 h-24 rounded-full ${step.color} bg-opacity-10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-6 relative z-10 shadow-lg shadow-${step.color}/20 transition-transform duration-300 hover:scale-110`}>
                <div className={`absolute inset-0 rounded-full ${step.color} opacity-20 blur-md animate-pulse`}></div>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark-blue border border-white/20 flex items-center justify-center text-sm font-bold text-gray-400">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
