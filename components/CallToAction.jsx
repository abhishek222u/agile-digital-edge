import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 -z-10"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-blue/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-green/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Let&apos;s build something extraordinary together. Elevate your brand with our premium digital solutions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-white text-dark-blue rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl shadow-white/10"
        >
          Start Your Project <ArrowRight className="ml-2 w-5 h-5 text-primary" />
        </Link>
      </div>
    </section>
  );
}
