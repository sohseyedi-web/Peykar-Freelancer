import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

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

const ProposalRow = ({ proposal, index }) => {
  const { status } = proposal || {};

  return (
    <tr key={proposal?._id}>
      <td>{index + 1}</td>
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
    </tr>
  );
};

export default ProposalRow;
