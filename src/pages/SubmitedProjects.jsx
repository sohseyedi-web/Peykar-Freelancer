import PorjectHeader from "../features/freelancer/project/ProjectHeader";
import PorjectTable from "../features/freelancer/project/ProjectTable";

const SubmitedProjects = () => {
  return (
    <>
      <PorjectHeader />
      <hr className="border-slate-900 my-3" />
      <PorjectTable />
    </>
  );
};

export default SubmitedProjects;
