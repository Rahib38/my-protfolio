/* eslint-disable @typescript-eslint/no-explicit-any */
import AddProjectModal from "@/app/components/projects/AddProjectModal";
import ProjectCard from "@/app/components/projects/ProjectCard";

const ProjectPage = async () => {
  const res = await fetch(
    "https://my-protfolio-server-teal.vercel.app/api/projects",
    {
      cache: "no-store",
    }
  );
  const projects = await res.json();
  return (
    <div>
      <div className="flex justify-end">
        <AddProjectModal></AddProjectModal>
      </div>
      <h2>All Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {projects?.data?.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
