import React from "react";
import { useProposals } from "./useProposals";
import ProposalRow from "./ProposalRow";
import Loading from "../../ui/Loading";

const ProposalTable = () => {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;
  if (!proposals?.length) return <p>درخواستی وجود ندارد</p>;

  return (
    <div className="overflow-x-auto rounded-md shadow-md text-gray-100 bg-slate-900">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-gray-100">
            <th>#</th>
            <th> توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {proposals?.map((proposal, index) => (
            <ProposalRow key={proposal._id} index={index} proposal={proposal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProposalTable;
