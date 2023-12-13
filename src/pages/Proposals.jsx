import ProposalHeader from './../features/proposals/ProposalHeader';
import ProposalTable from './../features/proposals/ProposalTable';

const Proposals = () => {
  return (
    <>
      <ProposalHeader/>
      <hr className='border-slate-900 my-3'/>
      <ProposalTable/>
    </>
  )
}

export default Proposals