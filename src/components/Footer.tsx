"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Hero CTA */}
      <section className="text-center px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
        >
          Have a Project in mind? Let’s Talk
        </motion.h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Join us and transform your brand into a visual masterpiece.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-5 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Company Name */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src="/Ellipse 18.png"
              alt="O5Dezigns Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1
              className="text-black"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "28px",
                lineHeight: "1",
                letterSpacing: "0.5px",
              }}
            >
              O5Dezigns
            </h1>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            A trusted company formed to help your business grow.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3 sm:mb-4">Useful Links</h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base">
            <li>
              <Link href="/about" className="hover:text-purple-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-purple-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-purple-600">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-purple-600">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3 sm:mb-4">Support</h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base">
            <li>
              <Link href="/privacy" className="hover:text-purple-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-purple-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-purple-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us / Contact */}
        <div>
          <h3 className="font-semibold text-black mb-3 sm:mb-4">Find Us</h3>
          <p className="text-sm text-black mb-1">Mon - Sat : 8am - 9pm</p>
          <p className="text-sm text-black mb-1">Appointment</p>
          <p className="text-sm text-black mb-1">Project Offers</p>
          <p className="text-sm text-black mb-2">05dezigns@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            <Link
              href="#"
              className="text-gray-700 hover:text-purple-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-red-600"
              aria-label="Pinterest"
            >
              <FaPinterest size={20} />
            </Link>
            <Link
              href="mailto:05dezigns@gmail.com"
              className="text-gray-700 hover:text-green-600"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </Link>
            <Link
              href="https://wa.me/1234567890"
              className="text-gray-700 hover:text-green-500"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-xs sm:text-sm text-gray-500 py-4 border-t mt-6">
        ©2025 O5Dezigns. All rights reserved.
      </div>
    </footer>
  );
}
