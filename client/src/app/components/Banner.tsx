"use client";
import nadimPic from "@/asset/eietaamarpic.png";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div 
      className="max-w-[1200px] mx-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between mt-24 items-center px-2">
        {/* Text Section */}
        <motion.div 
          className="max-w-[600px] space-y-5 mt-2 px-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="lg:text-3xl text-2xl font-semibold">
            I am Nadimul Rahib
          </h3>
          <h3 className="lg:text-6xl text-4xl font-bold">
            Full Stack Web Developer.
          </h3>
          <p className="lg:text-xl md:font-medium">
            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
          </p>

          {/* Buttons Section */}
          <div className="flex gap-4 items-center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://drive.google.com/uc?export=download&id=1MvEVthppr1RPbY6wsKFUifjBWPbHUXnG"
                download="Nadim_Resume.pdf"
              >
                <button className="border rounded-full p-2 px-3 bg-blue-600">
                  <h1 className="flex items-center gap-2 text-white font-semibold">
                    Download CV <MdOutlineFileDownload size={20} />
                  </h1>
                </button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href={"https://www.linkedin.com/in/nadimulrahib"}>
                <button className="border rounded-full p-2">
                  <FaLinkedinIn />
                </button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href={"https://github.com/Rahib38"}>
                <button className="border rounded-full p-2">
                  <IoLogoGithub />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src={nadimPic}
            alt="nadim"
            height={400}
            width={400}
            className="rounded-3xl"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-16">
        {[
          { value: "2", label: "Years of Experience" },
          { value: "50+", label: "Projects Completed" },
          { value: "1.5k", label: "Happy Clients" },
          { value: "2", label: "Years of Experience" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h1 className="text-8xl">{item.value}</h1>
            <p className="text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Banner;
