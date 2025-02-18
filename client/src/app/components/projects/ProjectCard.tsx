/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaExternalLinkAlt, FaGithub, FaTrash } from "react-icons/fa";

const ProjectCard = ({ project, onUpdate }: any) => {


  const isDashboard =
    typeof window !== "undefined" &&
    window.location.pathname.includes("/dashboard");

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [updatedProject, setUpdatedProject] = useState({
    title: project?.title,
    description: project?.description,
    image: project?.image,
    githubLink: project?.githubLink,
    liveLink: project?.liveLink,
    technologies: project?.technologies,
  });

  const technologies = updatedProject?.technologies?.split(",") || [];

  console.log(technologies);

  const handleChange = (e: any) => {
    setUpdatedProject({ ...updatedProject, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {

    try {
      const res = await fetch(
        `http://localhost:5001/api/projects/${project._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProject),
        }
      );

      if (res.ok) {
        onUpdate();
        setIsEditOpen(false);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await fetch(
        `http://localhost:5001/api/projects/${project._id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        alert("Project Deleted Successfully!");
        window.location.reload();
      } else {
        alert("Failed to delete project.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="relative p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <figure className="relative">
        <Image
          src={project?.image || "https://picsum.photos/id/101/800/600"}
          alt={project?.title}
          className="aspect-video w-full transition-transform duration-500 group-hover:scale-110"
          width={1000}
          height={1000}
        />
        <div className="absolute top-2 right-2 flex gap-2 opacity-50 transition-opacity duration-300 hover:opacity-100">
          {project?.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
              style={{ pointerEvents: "auto" }} // Allow pointer events on GitHub link
            >
              <FaGithub className="text-lg" />
            </Link>
          )}
          {project?.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500"
              style={{ pointerEvents: "auto" }} // Allow pointer events on Live link
            >
              <FaExternalLinkAlt className="text-lg" />
            </Link>
          )}
        </div>
      </figure>

      <div className="p-2">
        {isDashboard && (
          <div className="absolute top-4 left-4 flex gap-3">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setIsEditOpen(true)}
              style={{ pointerEvents: "auto" }} // Allow pointer events on edit button
            >
              <FaEdit size={18} />
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={handleDelete}
              style={{ pointerEvents: "auto" }} // Allow pointer events on delete button
            >
              <FaTrash size={18} />
            </button>
          </div>
        )}
        <h3 className="text-xl font-medium ">{project?.title}</h3>
        <p className="text-sm ">
          {project?.description.slice(0, 150)}...
        </p>
        <div className="mt-4 overflow-x-auto whitespace-nowrap flex gap-2 py-2 max-w-full">
          {technologies?.map((tech:any, index:any) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {isEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Project</h2>
            <input
              type="text"
              name="title"
              value={updatedProject?.title}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
              placeholder="Project Title"
            />
            <textarea
              name="description"
              value={updatedProject?.description}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
              placeholder="Project Description"
            ></textarea>
            <input
              type="text"
              name="githubLink"
              value={updatedProject?.githubLink}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
              placeholder="GitHub Link"
            />
            <input
              type="text"
              name="liveLink"
              value={updatedProject?.liveLink}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
              placeholder="LiveLink Link"
            />
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

export default ProjectCard;
