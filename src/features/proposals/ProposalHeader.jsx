import { useState } from "react";
import CreateProposal from "./CreateProposal";
import * as RiIcon from "react-icons/ri";
import Modal from './../../ui/Modal';

const ProposalHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <h4 className="text-2xl font-semibold">درخواست های شما</h4>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--success w-[180px]"
      >
        <RiIcon.RiAddFill size={26} />
        درخواست جدید
      </button>
      <Modal onClose={() => setOpen(!open)} open={open} title={"درخواست پروژه"}>
        <CreateProposal onClose={() => setOpen(!open)} />
      </Modal>
    </header>
  );
};

export default ProposalHeader;
