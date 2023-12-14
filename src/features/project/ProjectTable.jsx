import Loading from "../../ui/Loading";
import ProjectRow from "./ProjectRow";

const ProjectTable = ({ proposals , isLoading}) => {
  if (isLoading) return <Loading />;
  if (!proposals?.length) return <p>درخواستی وجود ندارد</p>;

  return (
    <div className="overflow-x-auto rounded-md shadow-md text-gray-100 bg-slate-900">
      <table className="table">
        {/* head */}
        <thead>
        <tr className=" text-gray-100">
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {proposals?.map((proposal, index) => (
            <ProjectRow key={proposal._id} index={index} proposal={proposal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
