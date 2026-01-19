"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { Code, Palette, Zap, Layers, ChevronLeft, ChevronRight, ZoomIn, ShoppingBag, Database, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from 'embla-carousel-react';

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
  {
    icon: <Code size={32} />,
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps for iOS and Android.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: <ZoomIn size={32} />,
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies to improve visibility and organic rankings.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Shopify App Development",
    desc: "Custom Shopify apps to extend store functionality and boost sales.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <Database size={32} />,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and DevOps for seamless operations.",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: <Globe size={32} />,
    title: "E-Commerce",
    desc: "Full-scale e-commerce platforms designed for growth and conversion.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];



export default function ServicesPreview() {
  const sectionRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        ".carousel-container",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out"
        }
      )
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section ref={sectionRef} className="py-24 pb-20 relative z-10 overflow-hidden bg-black/[0.96]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 preview-title opacity-0">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-xl">
              We deliver comprehensive digital solutions tailored to elevate your business.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-4 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${!canScrollPrev ? 'opacity-50 cursor-not-allowed text-gray-600' : 'text-white hover:bg-white hover:text-black hover:border-white'}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${!canScrollNext ? 'opacity-50 cursor-not-allowed text-gray-600' : 'text-white hover:bg-white hover:text-black hover:border-white'}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="carousel-container opacity-0">
          <div className="overflow-hidden py-10" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-6">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
                  <div className="group h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                    <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Navigation Dots or Buttons could go here if needed */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
