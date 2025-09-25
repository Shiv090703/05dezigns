"use client";
import Link from "next/link";
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
           <Link href="/contact">
          <button className="w-80 h-16 left-0 top-0 bg-conic-180 from-violet-600 via-violet-600 via 89deg to-purple-500 rounded-tl-[10px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[10px] text-center justify-end text-white text-3xl font-normal font-['Poppins']">
            Contact Us →
          </button>
          </Link>
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
      <section className="relative flex flex-col md:flex-row items-center overflow-hidden bg-violet-600 text-white px-6 md:px-20 py-20">
        {/* Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-[600px] bg-violet-500/70 rounded-full blur-[220px] top-0 left-10" />
          <div className="absolute w-[500px] h-[700px] bg-purple-700/60 rounded-full blur-[300px] bottom-0 right-10" />
        </div>

        {/* Left Side - Image */}
        <motion.div
          className="relative z-10 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/phon.png" // replace with your image
            alt="Vision Preview"
            width={500}
            height={500}
            className="rounded-xl drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="relative max-w-2xl z-10 mt-10 md:mt-0 md:ml-16 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your vision deserves designs that stand out.
          </h2>
          <p className="text-lg md:text-xl">
            We make it happen with creativity and precision.
          </p>
        </motion.div>
      </section>
      {/* Features Section */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 leading-snug text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We create the perfect <br className="hidden md:block" /> 
          custom design solution for you
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 leading-snug">
              Everything you need, <br className="hidden md:block" />
              completely customized
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Track your design projects, discover new styles, and choose the
              right visuals. All those insights and much more are included and
              completely free of charge.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mt-auto rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-lg bg-gray-800 text-white text-lg font-medium hover:bg-gray-900 transition"
            >
              Learn more
            </motion.button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 leading-snug">
              Uncover New <span className="text-purple-600 font-bold">Possibilities</span>
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We offer a wide range of graphic design services, including logo design,
              branding, web design, and print design. Our mission is to deliver designs
              that exceed expectations and fulfill unique needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 mt-auto rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-lg bg-gray-800 text-white text-lg font-medium hover:bg-gray-900 transition"
            >
              Learn more
            </motion.button>
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