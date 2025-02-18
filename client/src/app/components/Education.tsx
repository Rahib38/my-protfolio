"use client"

import { FaGraduationCap, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Education() {
  return (
    <div className=" flex flex-col items-center justify-center py-10 px-2">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          My Education
        </h1>

        {/* Education Card */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-6">
          <FaGraduationCap className="text-6xl text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 text-center">
            Diploma in Computer Science
          </h3>
          <p className="text-gray-500 text-center mt-2">
            Currently pursuing my diploma with a focus on programming skills, web development, and problem-solving.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-700 hover:text-indigo-600 cursor-pointer transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-700 hover:text-indigo-600 cursor-pointer transition duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-gray-700 hover:text-indigo-600 cursor-pointer transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

