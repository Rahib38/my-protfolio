/* eslint-disable @typescript-eslint/no-explicit-any */
import AddBlogModal from "@/app/components/blogs/AddBlogModal";
import BlogCard from "@/app/components/blogs/BlogCard";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const BlogPage = async () => {
  const res = await fetch("http://localhost:5001/api/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  const session = await getServerSession(authOptions)
  console.log(blogs)
  return (
    <div>
      <div className="flex justify-end">
        <AddBlogModal></AddBlogModal>
      </div>
      <h2 className="text-3xl font-semibold text-center ">All Blogs</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5 lg:px-5" >
       
        {blogs?.data?.map((blog:any) => (
          <BlogCard key={blog.id} blog={blog} session={session}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
