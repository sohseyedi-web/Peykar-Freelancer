import useUser from "../features/auth/useUser";
import Stats from "../features/freelancer/Stats";
import { useProposals } from "../features/proposals/useProposals";
import HeaderDashboard from "../ui/HeaderDashboard";

const FreeLancer = () => {
  const { data } = useUser();
  const { isLoading, proposals } = useProposals();

  return (
    <>
      <HeaderDashboard user={data?.user} />
      <hr className="border-slate-900 my-3" />
      <Stats loading={isLoading} proposals={proposals} />
    </>
  );
};

export default FreeLancer;
