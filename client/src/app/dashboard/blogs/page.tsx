/* eslint-disable @typescript-eslint/no-explicit-any */
import AddBlogModal from "@/app/components/blogs/AddBlogModal";
import BlogCard from "@/app/components/blogs/BlogCard";

const BlogPage = async () => {
  const res = await fetch("http://localhost:5001/api/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  console.log(blogs)
  return (
    <div>
      <div className="flex justify-end">
        <AddBlogModal></AddBlogModal>
      </div>
      <h2>All Blogs</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10" >
       
        {blogs?.data?.map((blog:any) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
