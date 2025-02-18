"use client";

import { FaReact, FaNode, FaJsSquare, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiFirebase, SiRedux, SiNextdotjs, SiExpress } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs size={50} color="#000" />, percent: 85 },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" />, percent: 90 },
  { name: "Mongoose", icon: <FaDatabase size={50} color="#7D7D7D" />, percent: 85 },
  { name: "Firebase", icon: <SiFirebase size={50} color="#FFCA28" />, percent: 80 },
  { name: "NextAuth", icon: <SiExpress size={50} color="#6C6C6C" />, percent: 75 },
  { name: "Node.js", icon: <FaNode size={50} color="#8CC84B" />, percent: 90 },
  { name: "TypeScript", icon: <SiTypescript size={50} color="#007ACC" />, percent: 80 },
  { name: "JavaScript", icon: <FaJsSquare size={50} color="#F7DF1E" />, percent: 95 },
  { name: "React", icon: <FaReact size={50} color="#61DBFB" />, percent: 95 },
  { name: "Redux", icon: <SiRedux size={50} color="#764ABC" />, percent: 85 },
];

const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold ">My Skills</h2>
        <p className="text-xl mt-4">
          We turn your ideas into unique web projects that inspire both you and your customers.
        </p>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center px-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 w-44 h-56 rounded-2xl py-4 flex flex-col items-center justify-center transform hover:scale-105"
          >
            <div className="flex justify-center items-center mb-4">
              {skill.icon}
            </div>
            <h1 className="text-center mt-4 text-lg font-semibold text-gray-800">{skill.name}</h1>
            <p className="text-center text-sm mt-2 text-gray-500">Skill Level: {skill.percent}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
