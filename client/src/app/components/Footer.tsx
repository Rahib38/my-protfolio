"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        {/* Left Section - Brand & Navigation */}
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-wide"
          >
           Nadimul Rahib
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 mt-4 text-sm text-gray-400 justify-center md:justify-start"
          >
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Projects</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </motion.div>
        </div>
        
        {/* Middle Section - Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:w-1/3 mt-6 md:mt-0"
        >
          <p className="text-sm text-gray-400">Subscribe to our newsletter</p>
          <div className="mt-3 flex">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none w-full" />
            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-500 transition">Subscribe</button>
          </div>
        </motion.div>
        
        {/* Right Section - Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0 gap-4"
        >
          <a href="#" className="text-gray-400 hover:text-blue-500 transition text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition text-lg">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 transition text-lg">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition text-lg">
            <FaInstagram />
          </a>
        </motion.div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} YourName. All Rights Reserved.
      </div>
    </footer>
  );
}
