// components/Header.tsx
"use client";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
            <Image
                src="/Ellipse 18.png" // put your logo in public folder
                alt="O5Dezigns Logo"
                width={40}            // adjust size as needed
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
              className="text-gray-700 hover:text-purple-600 transition"
            >
              {link.name}
            </Link>
          ))}
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-white hover:opacity-90">
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-purple-600 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-white hover:opacity-90">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
