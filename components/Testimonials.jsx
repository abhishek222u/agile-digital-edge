"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Agile Digital Edge transformed our online presence. Their attention to detail and animations are world-class.",
    author: "Sarah Jenkins",
    role: "CEO, TechNova",
    stars: 5,
  },
  {
    quote: "The team is incredibly talented. They delivered a product that exceeded our expectations in record time.",
    author: "Michael Ross",
    role: "Product Lead, StreamLine",
    stars: 5,
  },
  {
    quote: "Professional, creative, and technical wizards. Highly recommend if you want to stand out.",
    author: "Elena Rodriguez",
    role: "Founder, Luxe Interiors",
    stars: 5,
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".testimonial-card", {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Stories</h2>
          <p className="text-gray-400">Trusted by innovative companies worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative">
               <Quote className="absolute top-8 right-8 text-white/10 w-12 h-12" />
               <div className="flex space-x-1 mb-6 text-yellow-400">
                 {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
               </div>
               <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                 &quot;{t.quote}&quot;
               </p>
               <div>
                 <h4 className="text-white font-bold">{t.author}</h4>
                 <p className="text-primary text-sm">{t.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
