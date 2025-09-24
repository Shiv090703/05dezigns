// components/Header.tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header
      className="sticky top-0 z-50 bg-gray-100 shadow"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-gray-700 hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-white hover:opacity-90"
          >
            Contact Us
          </motion.button>
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

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            className="md:hidden bg-white shadow px-6 py-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
