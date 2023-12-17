import Loading from '../../../ui/Loading';
import { useProjects } from '../../../hooks/useProjects';
import SubmitProjectRow from './SubmitProjectRow';

const SubmitProjectTable = () => {
  const { isLoading, projects } = useProjects();


  if (isLoading) return <Loading />;
  if (!projects?.length) return <p>پروژه ای وجود ندارد</p>;

  return (
    <div className="overflow-x-auto rounded-md shadow-md text-gray-100 bg-slate-900">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-gray-100">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project, index) => (
            <SubmitProjectRow key={project?._id} index={index} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmitProjectTable