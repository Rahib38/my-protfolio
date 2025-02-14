import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'

const ProjectPage = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex'>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  )
}

export default ProjectPage
