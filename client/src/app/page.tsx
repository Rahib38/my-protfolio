/* eslint-disable @typescript-eslint/no-explicit-any */
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Banner from "./components/Banner";
import BlogCard from "./components/blogs/BlogCard";
import Education from "./components/Education";
import ProjectCard from "./components/projects/ProjectCard";
import Skills from "./components/Skills";

const HomePage = async () => {
  const res = await fetch(
    "https://my-protfolio-server-teal.vercel.app/api/projects",
    {
      cache: "no-store",
    }
  );
  const projects = await res.json();

  const response = await fetch(
    "https://my-protfolio-server-teal.vercel.app/api/blogs",
    {
      cache: "no-store",
    }
  );
  const blogs = await response.json();
  const session = await getServerSession(authOptions);
  return (
    <div className="relative">
      <Banner></Banner>

      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            My Recent Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            We bring your ideas to life with a unique web project that not only
            inspires you but also captivates your customers.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1">
          {projects?.data?.slice(0, 3).map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/projects">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all dark:bg-blue-500 dark:hover:bg-blue-600">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
      <Education></Education>

      <Skills></Skills>
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Recent Blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            Stay updated with our latest thoughts, insights, and inspirations in
            web development and design.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 grid-cols-1">
          {blogs?.data?.slice(0, 3).map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} session={session} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blogs">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all dark:bg-blue-500 dark:hover:bg-blue-600">
              View All Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
