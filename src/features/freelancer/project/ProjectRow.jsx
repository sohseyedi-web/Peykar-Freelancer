import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import toLocaleDate from "./../../../utils/toLocalDateString";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "./../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const ProjectRow = ({ project, index }) => {
  const { status } = project || {};
  const [open, setOpen] = useState(false);

  return (
    <tr key={project?._id}>
      <td>{index + 1}</td>
      <td>
        <p>{truncateText(project?.title, 30)}</p>
      </td>
      <td>{toPersianNumbersWithComma(String(project?.budget))}</td>
      <td>{toLocaleDate(project?.deadline)}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title={"ارسال درخواست"}
        >
          <CreateProposal
            onClose={() => setOpen(false)}
            projectId={project?._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-4 h-4 text-blue-500" />
        </button>
      </td>
    </tr>
  );
};

export default ProjectRow;
