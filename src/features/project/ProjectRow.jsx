import React from "react";
import { useState } from "react";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Modal from "./../../ui/Modal";
import SelectField from "./../../ui/SelectField";
import ChangeProjectStatus from "./ChangeProjectStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

const ProjectRow = ({ proposal , index}) => {
  const { status } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <tr key={proposal?._id}>
      <td>{index + 1}</td>
      <td>{proposal?.user?.name}</td>
      <td>
        <p>{truncateText(proposal?.description, 60)}</p>
      </td>
      <td>{toPersianNumbers(proposal?.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal?.price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(!open)}
          open={open}
          title={"تغییر وضعیت درخواست"}
        >
          <ChangeProjectStatus
            onClose={() => setOpen(!open)}
            proposalId={proposal?._id}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </tr>
  );
};

export default ProjectRow;
