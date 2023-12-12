import * as RiIcon from "react-icons/ri";
import Modal from "./../../ui/Modal";

const ProjectsRow = ({ project, index }) => {
  return (
    <tr key={project._id}>
      <td>{index + 1}</td>
      <td>
        <p>{truncateText(project?.title, 30)}</p>
      </td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocaleDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "-"}</td>
      {/* <ToggleProjectStatus project={project} /> */}
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--error">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setIsEditOpen(true)}
            className="text-indigo-500"
          >
            <RiIcon.RiEdit2Line size={25} />
          </button>
          <Modal onClose={() => setIsEditOpen(!isEditOpen)} open={isEditOpen}>
            this is modal
          </Modal>
          <button
            className="text-red-500"
            onClick={() => setIsDeleteOpen(true)}
          >
            <RiIcon.RiDeleteBin2Line size={25} />
          </button>
          <Modal onClose={() => setIsEditOpen(!isEditOpen)} open={isEditOpen}>
            hello
          </Modal>
        </div>
      </td>
      <td>
        <Link to={project._id} className="text-center">
          <RiIcon.RiEye2Line size={28} className="text-gray-600" />
        </Link>
      </td>
    </tr>
  );
};

export default ProjectsRow;
