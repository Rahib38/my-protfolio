/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"
import Image from "next/image";

const BlogDetailsPage = async ({ params }: { params: any }) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(
    `https://my-protfolio-server-teal.vercel.app/api/blogs/${id}`,
    { next: { tags: ["blogs"] } }
  );
  const blogs = await res.json();
  const blog = blogs?.data;
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold  mb-4">{blog.title}</h1>
      <p className="text-sm  mb-4">
        Published on: {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div className="w-full relative rounded-lg overflow-hidden shadow-lg mb-4">
        <Image src={blog.image} alt={blog.title} width={750} height={500} />
      </div>
      <p className="text-lg  leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetailsPage;
