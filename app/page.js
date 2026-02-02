"use client";
import dynamic from 'next/dynamic';
import Hero from "../components/Hero";
import WhyChooseUs from '@/components/WhyChooseUs';

// Dynamically import components that are not immediately visible
const ServicesPreview = dynamic(() => import("../components/ServicesPreview"), {
  loading: () => <div className="py-20 bg-black min-h-[500px]"></div>,
});
const SelectedWork = dynamic(() => import("../components/SelectedWork"), {
  loading: () => <div className="py-20 bg-black min-h-[500px]"></div>,
});
const Process = dynamic(() => import("../components/Process"), {
  loading: () => <div className="py-20 bg-black min-h-[500px]"></div>,
});
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => <div className="py-20 bg-black min-h-[400px]"></div>,
});
const CallToAction = dynamic(() => import("../components/CallToAction"), {
  loading: () => <div className="py-20 bg-black min-h-[300px]"></div>,
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <SelectedWork />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CallToAction />
    </>
  );
}
