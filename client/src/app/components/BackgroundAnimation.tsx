"use client";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-bg" />
    </motion.div>
  );
}
