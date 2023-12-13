import useUser from "../features/auth/useUser";
import Stats from "../features/owner/Stats";
import { useOwnerProjects } from "../features/projects/useOwnerProjects";
import HeaderDashboard from "../ui/HeaderDashboard";

const Owner = () => {
  const { data } = useUser();
  const { projects, isLoading } = useOwnerProjects();

  return (
    <>
      <HeaderDashboard user={data?.user} />
      <hr className="border-slate-900 my-3" />
      <Stats loading={isLoading} projects={projects} />
    </>
  );
};

export default Owner;
