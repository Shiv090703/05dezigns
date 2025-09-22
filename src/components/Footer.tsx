"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaPinterest, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 text-gray-700">
      
      {/* Hero CTA */}
      <section className="text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Have a project in mind? Let’s Talk
        </motion.h2>
        <p className="text-gray-600 mb-6 md:text-lg">
          Join us and transform your brand into a visual masterpiece.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">

        {/* Logo & Company Name */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/Ellipse 18.png" // your logo in public folder
              alt="O5Dezigns Logo"
              width={60} // smaller, professional size
              height={60}
              className="rounded-full"
            />
            <h1
              className="text-black"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "1",
                letterSpacing: "0.5px",
              }}
            >
              O5Dezigns
            </h1>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            A trusted company formed to help your business grow.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="hover:text-purple-600">About</Link></li>
            <li><Link href="/services" className="hover:text-purple-600">Services</Link></li>
            <li><Link href="/reviews" className="hover:text-purple-600">Reviews</Link></li>
            <li><Link href="/pricing" className="hover:text-purple-600">Pricing</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/privacy" className="hover:text-purple-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-purple-600">Terms & Conditions</Link></li>
            <li><Link href="/faq" className="hover:text-purple-600">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600">Contact</Link></li>
          </ul>
        </div>

        {/* Find Us / Contact */}
        <div>
          <h3 className="font-semibold text-black mb-4">Find Us</h3>
          <p className="text-sm text-black mb-1">Mon - Sat : 8am - 9pm</p>
          <p className="text-sm text-black mb-1">Appointment</p>
          <p className="text-sm text-black mb-1">Project Offers</p>
          <p className="text-sm text-black mb-2">05dezigns@gmail.com</p>

          <div className="flex gap-3 mt-3">
            <Link href="#" className="text-gray-700 hover:text-purple-600"><FaLinkedin size={20} /></Link>
            <Link href="#" className="text-gray-700 hover:text-pink-500"><FaInstagram size={20} /></Link>
            <Link href="#" className="text-gray-700 hover:text-red-600"><FaPinterest size={20} /></Link>
            <Link href="mailto:05dezigns@gmail.com" className="text-gray-700 hover:text-green-600"><FaEnvelope size={20} /></Link>
            <Link href="https://wa.me/1234567890" className="text-gray-700 hover:text-green-500"><FaWhatsapp size={20} /></Link>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-500 py-4 border-t mt-8">
        ©2025 O5Dezigns. All rights reserved.
      </div>
      
    </footer>
  );
}
