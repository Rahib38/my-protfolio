/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";
import ImageUpload from "../ImageUploader";

const BlogCard = ({ blog, onUpdate }:any) => {
  const isDashboard =
  typeof window !== "undefined" &&
  window.location.pathname.includes("/dashboard");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [updatedBlog, setUpdatedBlog] = useState({
    title: blog?.title,
    content: blog?.content,
    image: blog?.image,

    
  });
  const handleImageUpload = (imageUrl: string) => {
    setUpdatedBlog((prev:any) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  // Handle input changes
  const handleChange = (e:any) => {
    setUpdatedBlog({ ...updatedBlog, [e.target.name]: e.target.value });
  };

  // Handle update function
  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5001/api/blogs/${blog._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlog),
      });

      if (res.ok) {
        onUpdate(); // Refresh the blog list
        setIsEditOpen(false); // Close modal
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };


  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await fetch(`http://localhost:5001/api/blogs/${blog._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Blog Deleted Successfully!");
        window.location.reload();
      } else {
        alert("Failed to delete blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      {/* Edit & Delete Icons */}
      {isDashboard&&<div className="absolute top-3 right-3 flex gap-3">
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors"
          onClick={() => setIsEditOpen(true)}
        >
          <FaEdit size={18} />
        </button>
        <button 
          className="text-red-500 hover:text-red-700 transition-colors"
          onClick={handleDelete}
        >
          <FaTrash size={18} />
        </button>
      </div>}

      {/* Blog Image */}
      <Image
        src={blog?.image || "https://via.placeholder.com/400x200"}
        alt={blog?.title}
        className="w-full h-56 object-cover rounded-lg mb-4"
        width={500}
        height={500}
      />

      {/* Blog Title */}
      <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200">
        {blog?.title}
      </h3>

      {/* Blog Content Preview */}
      <p className="text-gray-600 mt-2 text-base">
        {blog?.content.slice(0, 150)}...
      </p>

      <div className="flex justify-between items-center mt-4">
        {/* Author */}
        <span className="text-gray-500 text-sm font-medium">
          By {blog?.author?.name || "Unknown Author"}
        </span>
        {/* See More Button */}
        <button className="text-blue-600 hover:underline text-sm font-semibold">
          See More
        </button>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Blog</h2>
            <input
              type="text"
              name="title"
              value={updatedBlog.title}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
              placeholder="Blog Title"
            />
            <textarea
              name="content"
              value={updatedBlog.content}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
              placeholder="Blog Content"
              // rows="4"
            ></textarea>
               <ImageUpload onImageUpload={handleImageUpload} />
       
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
