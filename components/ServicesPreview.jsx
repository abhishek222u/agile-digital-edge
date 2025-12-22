"use client";
import { useRef, useEffect } from "react";
import { Code, Palette, Zap, Layers } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    desc: "Robust, scalable, and high-performance websites built with modern technologies.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    desc: "Intuitive and beautiful interfaces that drive user engagement and satisfaction.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: <Zap size={32} />,
    title: "Branding",
    desc: "Memorable brand identities that resonate with your target audience.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: <Layers size={32} />,
    title: "Product Engineering",
    desc: "End-to-end product development strategies for digital transformation.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Section Title
      gsap.fromTo(
        ".preview-title",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Animate Cards
      gsap.fromTo(
        cardsRef.current.filter(Boolean), // Filter out nulls
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 preview-title opacity-0">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver comprehensive digital solutions tailored to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
