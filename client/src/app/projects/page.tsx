/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from "../components/projects/ProjectCard";

const ProjectPage = async () => {
  const res = await fetch(
    "https://my-protfolio-server-teal.vercel.app/api/projects",
    {
      cache: "no-store",
    }
  );
  const projects = await res.json();
  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-semibold text-center ">All Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5 lg:px-5">
        {projects?.data?.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
