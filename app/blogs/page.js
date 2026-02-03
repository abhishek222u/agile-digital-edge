"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogs = [
    {
        id: 1,
        title: "The Future of Shopify Development in 2024",
        excerpt:
            "Explore the latest trends in Shopify tailored for scaling e-commerce businesses. From Hydrogen to Oxygen, see what's changing.",
        date: "Feb 10, 2024",
        author: "Aditi Sharma",
        readTime: "5 min read",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2671&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Optimizing Next.js for Maximum Performance",
        excerpt:
            "A deep dive into server-side rendering, static generation, and how to make your Next.js applications lightning fast.",
        date: "Feb 08, 2024",
        author: "Rahul Verma",
        readTime: "8 min read",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Why UX Design is Critical for ROI",
        excerpt:
            "Understanding the direct correlation between good user experience design and your business's return on investment.",
        date: "Feb 05, 2024",
        author: "Priya Patel",
        readTime: "6 min read",
        category: "Design",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Migrating Legacy Systems to Modern Tech Stacks",
        excerpt:
            "Strategies for moving away from outdated monoliths to flexible, scalable microservices architectures.",
        date: "Jan 28, 2024",
        author: "Arjun Singh",
        readTime: "10 min read",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "AI Integrations for E-commerce Stores",
        excerpt:
            "How to leverage Artificial Intelligence to personalize shopping experiences and increase average order value.",
        date: "Jan 20, 2024",
        author: "Sneha Gupta",
        readTime: "7 min read",
        category: "AI & Tech",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "Building Scalable Custom Apps",
        excerpt:
            "Best practices for developing custom applications that can handle millions of users without breaking a sweat.",
        date: "Jan 15, 2024",
        author: "Vikram Malhotra",
        readTime: "9 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function BlogsPage() {
    return (
        <div className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-40 pb-20">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                        Our Latest Insights
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
                        Thoughts, strategies, and tutorials on web development, design, and
                        digital innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent-blue to-secondary rounded-2xl opacity-0 group-hover:opacity-75 transition duration-500 blur-sm"></div>
                            <div className="relative flex flex-col h-full bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition duration-300">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-accent-green border border-accent-green/20">
                                        {blog.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-neutral-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {blog.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>

                                    <p className="text-neutral-400 text-sm mb-6 line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-[10px] font-bold text-white">
                                                {blog.author.charAt(0)}
                                            </div>
                                            <span className="text-xs text-neutral-300">{blog.author}</span>
                                        </div>
                                        <Link
                                            href={"/blogs"}
                                            className="text-sm font-semibold text-accent-blue flex items-center gap-1 group-hover:gap-2 transition-all"
                                        >
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
