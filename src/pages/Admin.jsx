import Stats from "../features/admin/Stats";
import useUser from "../features/auth/useUser";
import HeaderDashboard from "./../ui/HeaderDashboard";
import { useListUser } from "./../features/admin/useListUser";
import { useCategories } from "./../hooks/useCategories";
import { useProjects } from "./../hooks/useProjects";

const Admin = () => {
  const { data } = useUser();
  const { users, isLoading } = useListUser();
  const { rawCategories, isPending } = useCategories();
  const { projects, isLoading: isProjecting } = useProjects();

  return (
    <>
      <HeaderDashboard user={data?.user} />
      <hr className="border-slate-900 my-3" />
      <Stats
        loading={isLoading || isPending || isProjecting}
        users={users}
        categories={rawCategories}
        projects={projects}
      />
    </>
  );
};

export default Admin;
