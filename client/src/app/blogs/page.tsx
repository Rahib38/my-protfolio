/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerSession } from "next-auth";
import BlogCard from "../components/blogs/BlogCard";
import { authOptions } from "@/utils/authOptions";

const BlogPage = async () => {
  const res = await fetch("http://localhost:5001/api/blogs", {
    cache: "no-store",
  });
  const session = await getServerSession(authOptions)
  console.log(session,"s")
  const blogs = await res.json();
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">All Blogs</h2>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-8">
        {blogs?.data?.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} session={session}/>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
