"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white">
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Creative Solutions for Modern Brands
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            We help businesses and individuals stand out with bold, creative,
            and professional designs tailored to their vision.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition">
            Contact Us →
          </button>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 md:ml-12 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Ellipse 18.png"
            alt="Hero graphic"
            width={420}
            height={420}
            className="rounded-full"
          />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-purple-700 to-purple-400 text-white px-8 md:px-24 py-24">
  <motion.div
    className="w-full md:w-1/2 text-center md:text-left"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
      Your vision deserves designs that stand out.
    </h2>
    <p className="text-xl font-light">
      We make it happen with creativity and precision.
    </p>
  </motion.div>

  <motion.div
    className="w-full md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Image
      src="/phon.png"
      alt="App Preview"
      width={480}
      height={480}
      className="rounded-2xl shadow-2xl border-4 border-white"
    />
  </motion.div>
</section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-20 text-center bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          We create the perfect custom design solution for you
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 max-w-5xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Everything you need, completely customized
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Track your design projects, discover new styles, and choose the
              right visuals. Everything is included and completely free of charge.
            </p>
            <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
              Learn more
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Uncover New <span className="text-purple-600">Possibilities</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From branding to print design, our team ensures exceptional results
              tailored to your needs.
            </p>
            <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
              Learn more
            </button>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-purple-600 text-white px-6 md:px-20 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Explore our design statistics
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-bold text-lg mb-3">Valuable design options</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From logos to web and print, we create visuals that inspire and
              deliver impact.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-black text-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-3">Stunning visuals…</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our creative approach ensures every design strengthens your brand
              identity.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-3">More projects</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Campaigns that create lasting impressions and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}
