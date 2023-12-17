import SubmitProjectHeader from './../features/freelancer/project/SubmitProjectHeader';
import SubmitProjectTable from './../features/freelancer/project/SubmitProjectTable';

const SubmitedProjects = () => {
  return (
    <>
      <SubmitProjectHeader />
      <hr className="border-slate-900 my-3" />
      <SubmitProjectTable />
    </>
  );
};

export default SubmitedProjects;
