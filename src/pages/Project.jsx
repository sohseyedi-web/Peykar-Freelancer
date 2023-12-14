import ProjectHeader from "../features/project/ProjectHeader";
import ProjectTable from "../features/project/ProjectTable";
import { useProject } from "../features/project/useProject";

const Project = () => {
  const {  project,isPending } = useProject();

  return (
    <>
      <ProjectHeader project={project} />
      <hr className="border-slate-900 my-3" />
      <ProjectTable proposals={project?.proposals} isLoading={isPending}/>
    </>
  );
};

export default Project;
