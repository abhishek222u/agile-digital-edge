"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const selectedWorks = [
  {
    title: "Neon Banking",
    category: "Fintech Mobile App",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "EcoSmart Home",
    category: "IoT Dashboard",
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "Vogue Fashion",
    category: "E-Commerce",
    color: "from-purple-500 to-pink-600",
  }
];

export default function SelectedWork() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-gray-400">Highlights from our recent partnerships.</p>
          </div>
          <Link href="/work" className="hidden md:flex items-center text-primary font-medium hover:text-white transition-colors">
            View All Projects <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-12 md:space-y-20">
          {selectedWorks.map((work, index) => (
            <div 
                key={index} 
                className={`work-card flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 group`}
            >
                {/* Image Placeholder */}
                <div className="w-full md:w-3/5 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-80 group-hover:scale-105 transition-transform duration-700`}></div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                     {/* Decorative Elements simulating UI */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                         <span className="text-9xl font-bold text-white mix-blend-overlay">{index + 1}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5">
                    <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">{work.category}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {work.title}
                    </h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        A premium digital experience designed to solve complex user problems while engaging customers with immersive visuals and intuitive navigation.
                    </p>
                    <Link href="/work" className="inline-flex items-center text-white border-b border-primary pb-1 group-hover:text-primary transition-colors">
                        View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <Link href="/work" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
                View All Projects <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </div>
    </section>
  );
}
