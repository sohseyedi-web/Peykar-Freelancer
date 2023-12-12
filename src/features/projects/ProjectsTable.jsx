import { useOwnerProjects } from "./useOwnerProjects";
import Loading from "./../../ui/Loading";
import Table from "./../../ui/Table";
import ProjectRow from "./ProjectsRow";

const ProjectsTable = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  if (!projects?.length) return <p>پروژه ای ایجاد نکردید</p>;


  console.log(projects)

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects?.map((project, index) => (
          <ProjectRow key={project?._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectsTable;
