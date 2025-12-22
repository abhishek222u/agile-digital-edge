"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 min-h-screen relative overflow-hidden">
        {/* Background Blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 contact-anim">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let&apos;s Talk</h1>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you immediately.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">hello@agiledigitaledge.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-blue shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                  <p className="text-gray-400">123 Innovation Dr, Tech City, TC 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 contact-anim">
            <form className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder=" " 
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-primary transition-colors peer"
                  />
                  <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Name
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder=" " 
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-primary transition-colors peer"
                  />
                  <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative group mb-8">
                <input 
                  type="text" 
                  placeholder=" " 
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-primary transition-colors peer"
                />
                <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Subject
                </label>
              </div>

              <div className="relative group mb-12">
                <textarea 
                  placeholder=" " 
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none peer"
                ></textarea>
                <label className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                  Message
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-[1.02] flex justify-center items-center group"
              >
                Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
