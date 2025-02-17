/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

const ProjectPage =async () => {
  const res = await fetch("http://localhost:5001/api/projects", {
    cache: "no-store",
  });
  const projects = await res.json();
  return (
    <div className='max-w-[1200px] mx-auto'>
      <h2>All Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {projects?.data?.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
