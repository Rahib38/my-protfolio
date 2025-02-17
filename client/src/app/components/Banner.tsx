"use client";
import nadimPic from "@/asset/eietaamarpic.png";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <div className=" max-w-[1200px] mx-auto ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between  mt-24 items-center ">
        <div className="max-w-[600px] space-y-5">
          <h3 className="lg:text-3xl md:text-xl font-semibold">I am Nadimul Rahib</h3>
          <h3 className="lg:text-6xl md:text-4xl font-bold">Full Stack Web Developer.</h3>
          <p className="lg:text-xl md:font-medium">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <div className="flex gap-4 items-center">
            <div>
              <button className="border rounded-full p-2">
                <h1 className="flex items-center gap-2">
                  Download cv <MdOutlineFileDownload />
                </h1>
              </button>
            </div>
            <div>
              <button className="border rounded-full p-2">
                <FaLinkedinIn />
              </button>
            </div>
            <div>
              <button className="border rounded-full p-2">
                <IoLogoGithub />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={nadimPic}
            alt="nadim"
            height={400}
            width={400}
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-20  mt-16">
        <div className="flex items-center gap-8 ">
          <h1 className="text-8xl">2</h1>
          <p className="text-lg">
            Years of <br /> Experience
          </p>
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-8xl">50+</h1>
          <p className="text-lg">
            Project <br /> Completed
          </p>
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-8xl">1.5k</h1>
          <p >
            Happy <br /> Clients
          </p>
        </div>
        <div className="flex items-center gap-8">
          <h1 className="text-8xl">2</h1>
          <p className="text-lg">
            Years of <br /> Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
