"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Software Development", href: "/services" },
        { name: "Mobile App Development", href: "/services" },
        { name: "Cloud Computing", href: "/services" },
        { name: "DevSecOps Services", href: "/services" },
        { name: "AI Development", href: "/services" },
        { name: "Software Testing", href: "/services" },
        { name: "Web Design Service", href: "/services" },
        { name: "DevOps Services", href: "/services" },
        { name: "Nearshore Software Development", href: "/services" },
        { name: "Convenience/Retail Solutions", href: "/services" },
      ],
    },
    {
      name: "Resources",
      href: "/resources",
      dropdown: [
        { name: "Blogs", href: "/resources" },
        { name: "Success Stories", href: "/resources" },
        { name: "Press Release", href: "/resources" },
        { name: "Pricing", href: "/resources" },
        { name: "QA Calculator", href: "/resources" },
      ],
    },
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark-blue/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white group">
          <Image src="/logo/image.png" alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide hover:text-primary transition-colors duration-300 flex items-center gap-1 ${pathname === link.href ? "text-primary" : "text-gray-300"
                  }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-green transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-white text-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top p-4 min-w-[200px] z-50">
                  <div className={`grid gap-x-8 gap-y-2 ${link.dropdown.length > 5 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-2 py-1.5 hover:text-primary text-sm font-medium hover:bg-gray-50 rounded transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Let's Talk Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Let&apos;s Talk
        </Link>

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
        <nav className="flex flex-col space-y-6 text-center max-h-[80vh] overflow-y-auto px-4">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex flex-col items-center">
              <Link
                href={link.href}
                ref={(el) => (linksRef.current[index] = el)}
                onClick={() => !link.dropdown && setIsOpen(false)}
                className="text-2xl font-bold text-white hover:text-primary transition-colors mb-2"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col space-y-2 mt-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
