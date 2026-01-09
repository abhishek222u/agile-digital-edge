"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const selectedWorks = [
  {
    title: "Pharmmaex",
    category: "Pharmaceuticals",
    video: "https://agiledigitaledge.com/agile_website_assets/pharmmaexvideo.mov",
  },
  {
    title: "Compression",
    category: "Sport Branding",
    video: "https://agiledigitaledge.com/agile_website_assets/compression.mov",
  },
  {
    title: "The Fitness Professor",
    category: "Fitness",
    video: "https://agiledigitaledge.com/agile_website_assets/fitnessprofessor.mov",
  },
];

export default function SelectedWork() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]); // 1. Yaha hum ek array banayenge saare videos ke liye

  // 2. Ye Effect chalega aur saare videos ki speed set karega
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.playbackRate = 3.0; // Speed yaha set karein
      }
    });
  }, []);

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
              className={`work-card flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
              {/* Media Container */}
              <div className="w-full md:w-3/5 h-[300px] md:h-[357px] rounded-2xl overflow-hidden relative cursor-pointer shadow-2xl overflow-hidden">
                {work.video ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={work.video}
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    playsInline
                    onLoadedMetadata={(e) => e.target.playbackRate = 3.0}
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                ) : (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/5">
                <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">{work.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
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
