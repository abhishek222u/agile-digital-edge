"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
        display: "flex",
      });
      gsap.fromTo(
        linksRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
        display: "none",
      });
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-blue/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white group">
          Agile <span className="text-primary group-hover:text-accent-blue transition-colors duration-300">Digital</span> Edge
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors duration-300 relative group ${
                pathname === link.href ? "text-primary" : "text-gray-300"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-dark-blue z-40 hidden flex-col justify-center items-center h-screen w-screen"
        style={{ transform: "translateX(100%)" }}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              ref={(el) => (linksRef.current[index] = el)}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
