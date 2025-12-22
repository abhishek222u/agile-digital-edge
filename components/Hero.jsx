"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight, PlayCircle } from "lucide-react";

import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline Animation (Word stagger attempt)
      // Since we don't have SplitText, we animate the element or children if manually split. 
      // For now, let's do a nice fade up for the whole lines with stagger.
      
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      )
      .fromTo(
        subheadlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
        "-=0.3"
      );

      // Floating Shapes Animation
      shapesRef.current.forEach((shape, i) => {
        gsap.to(shape, {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          rotation: "random(-10, 10)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <ParticleBackground />
      {/* Background Shapes */}
      <div 
        ref={el => shapesRef.current[0] = el}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl filter -z-10 mix-blend-screen opacity-50"
      ></div>
      <div 
        ref={el => shapesRef.current[1] = el}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl filter -z-10 mix-blend-screen opacity-50"
      ></div>
      <div 
        ref={el => shapesRef.current[2] = el}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-3xl filter -z-10 opacity-30"
      ></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div ref={headlineRef} className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-white mb-2">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-blue to-secondary">
              Experiences
            </span>{" "}
            That <br />
            Give You an <span className="text-white relative inline-block">
              Edge
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
        </div>

        <div ref={subheadlineRef} className="mb-10 text-gray-400 text-lg md:text-xl font-light tracking-wide">
          <p>Web Development • Product Design • Digital Solutions</p>
        </div>

        <div ref={ctaRef} className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
          >
            <span className="relative z-10 flex items-center">
              Let&apos;s Start Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/work"
            className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 flex items-center"
          >
            <PlayCircle className="mr-2 w-5 h-5 text-secondary" />
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
