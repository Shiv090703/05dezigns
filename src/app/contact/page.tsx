"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${form.name} (${form.email})`);
  };

  return (
    <div className="bg-gradient-to-b from-purple-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Feel free to get in touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Every great design starts with a conversation. Get in touch with us and let’s create
          something exceptional together.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-16 bg-white text-gray-900 rounded-t-3xl shadow-lg">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 shadow-lg rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Leave your message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full border p-2 rounded h-28 focus:ring-2 focus:ring-purple-600"
              required
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded hover:bg-purple-800 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Don’t Hesitate to contact us</h2>
          <p className="text-gray-600 mb-6">
            We’re always ready to listen, collaborate, and bring your ideas to life. Reach out today
            and let’s start creating something extraordinary together.
          </p>
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <span className="text-purple-600 text-2xl">📍</span>
              <span>35 Fountainhead Rd, ON, CA</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <span className="text-yellow-500 text-2xl">📞</span>
              <span>+1 (647) 882 8193</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <span className="text-purple-500 text-2xl">⏰</span>
              <span>Everyday 9AM - 7PM</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <span className="text-green-600 text-2xl">✉️</span>
              <span>o5dezigns@gmail.com</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold mb-2">Social Media:</p>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-purple-600">📧</a>
              <a href="#" className="hover:text-purple-600">🔗</a>
              <a href="#" className="hover:text-purple-600">📸</a>
              <a href="#" className="hover:text-purple-600">💬</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Have a project in mind? Let’s Talk
        </motion.h2>
        <p className="text-gray-300 mb-6">
          Join us and transform your brand into a visual masterpiece.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}
