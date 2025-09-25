// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Help", href: "/help" },
  { name: "Appointment", href: "/appointment" },
  { name: "Jobs", href: "/jobs" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/40 backdrop-blur-lg border-b border-white/20 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Ellipse 18.png"
            alt="O5Dezigns Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-800 transition-colors hover:text-purple-600 
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                         after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 
                         hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-white hover:opacity-90"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-lg shadow px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-800 hover:text-purple-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="w-full block text-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-white hover:opacity-90"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
