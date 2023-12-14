import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProjectHeader = ({ project }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Link to={"/owner/projects"} className="cursor-pointer text-blue-500">
        <RiArrowRightLine size={28} />
      </Link>
      <h3 className="text-lg font-semibold">
        لیست درخواست های پروژه {project?.title}
      </h3>
    </div>
  );
};

export default ProjectHeader;
