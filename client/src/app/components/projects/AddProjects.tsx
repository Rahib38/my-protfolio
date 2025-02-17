/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import ImageUpload from "../ImageUploader";

export default function AddProjects() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
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
      const response = await fetch("http://localhost:5001/api/projects", {
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
        image: "",
        description: "",
        technologies: "",
        githubLink: "",
        liveLink: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl dark:bg-gray-900">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Add a New Projects
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Title
          </label>
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
          <label className="block text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
            required
          ></textarea>
        </div>

        {/* Image Upload Component */}
        <ImageUpload onImageUpload={handleImageUpload} />

        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            Technologies
          </label>
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            GithubLink
          </label>
          <input
            type="text"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">
            LiveLink
          </label>
          <input
            type="text"
            name="liveLink"
            value={formData.liveLink}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
