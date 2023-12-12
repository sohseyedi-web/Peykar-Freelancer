import { useOwnerProjects } from "./useOwnerProjects";
import Loading from "./../../ui/Loading";
import Table from "./../../ui/Table";
import ProjectRow from "./ProjectsRow";

const ProjectsTable = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects?.length) return <p>پروژه ای ایجاد نکردید</p>;

  console.log(projects);

  return (
    <div className="overflow-x-auto rounded-md shadow-md text-gray-100 bg-slate-900">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-gray-100">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            {/* <th>فریلنسر</th> */}
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست ها</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project, index) => (
            <ProjectRow key={project._id} index={index} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
