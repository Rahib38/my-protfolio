"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
    >
      {/* Image with Icons */}
      <figure className="relative">
        <Image
          src="https://picsum.photos/id/101/800/600"
          alt="card image"
          className="aspect-video w-full transition-transform duration-500 group-hover:scale-110"
          width={500}
          height={500}
        />
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500"
          >
            <FaExternalLinkAlt className="text-lg" />
          </a>
        </div>
      </figure>

      {/* Body */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">The easy way to go</h3>
          <p className="text-sm text-slate-400">By George, Jun 3 2023</p>
        </header>
        <p>
          Experience the simple pleasures of a world with no cars, and only
          gentle walks through palm tree forests, and fallen coconuts. An
          island that’s home to extraordinary cliffs, swelling oceans, and
          mammoth manta rays.
        </p>
        {/* Skills Section */}
        <div className="mt-4 overflow-x-auto whitespace-nowrap flex gap-2 py-2">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Tailwind CSS</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Framer Motion</span>
        </div>
      </div>
    </motion.div>
  );
}
