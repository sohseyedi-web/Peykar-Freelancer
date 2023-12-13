import * as RiIcon from "react-icons/ri";
import Modal from "./../../ui/Modal";
import truncateText from "./../../utils/truncateText";
import { toPersianNumbersWithComma } from "./../../utils/toPersianNumbers";
import toLocaleDate from "./../../utils/toLocalDateString";
import { useState } from "react";
import { Link } from "react-router-dom";
import CreateForm from "./CreateForm";
import ConfrimDelete from "../../ui/ConfirmDelete";
import { useRemoveProject } from "./useRemoveProject";

const ProjectsRow = ({ project, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();

  return (
    <tr key={project._id}>
      <td>{toPersianNumbersWithComma(index + 1)}</td>
      <td>
        <div className="tooltip" data-tip={project?.title}>
          <p>{truncateText(project?.title, 20)}</p>
        </div>
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
      {/* <td>{project?.freelancer?.name || "-"}</td> */}
      {/* <ToggleProjectStatus project={project} /> */}
      <td>
        {project?.status === "OPEN" ? (
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
          <Modal
            onClose={() => setIsEditOpen(!isEditOpen)}
            open={isEditOpen}
            title={`ویرایش پروژه ${project?.title}`}
          >
            <CreateForm onClose={() => setIsEditOpen(!isEditOpen)} />
          </Modal>
          <button
            className="text-red-500"
            onClick={() => setIsDeleteOpen(true)}
          >
            <RiIcon.RiDeleteBin2Line size={25} />
          </button>
          <Modal
            onClose={() => setIsDeleteOpen(!isDeleteOpen)}
            open={isDeleteOpen}
            title={`حذف ${project?.title}`}
          >
            <ConfrimDelete
              title={project?.title}
              loading={isDeleting}
              onClose={() => setIsDeleteOpen(!isDeleteOpen)}
              onRemove={() =>
                removeProject(project?._id, {
                  onSuccess: () => setIsDeleteOpen(!isDeleteOpen),
                })
              }
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link to={project._id} className="text-blue-500">
          مشاهده اطلاعات
        </Link>
      </td>
    </tr>
  );
};

export default ProjectsRow;
