/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import ImageUpload from "../ImageUploader";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    isPublished: false,
    author: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Blog created successfully:", result);

      setFormData({
        title: "",
        content: "",
        image: "",
        isPublished: false,
        author: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="   rounded-xl dark:bg-gray-900">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Add a New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full">
          <label className="block text-gray-700 dark:text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={5}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
            required
          ></textarea>
        </div>

        {/* Image Upload Component */}
        <ImageUpload onImageUpload={handleImageUpload} />

        <div>
          <label className="block text-gray-700 dark:text-gray-300">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700 dark:text-gray-300">Publish Now</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}
