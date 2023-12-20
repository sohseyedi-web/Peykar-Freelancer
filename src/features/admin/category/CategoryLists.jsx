import { useCategories } from "../../../hooks/useCategories";
import Loading from "../../../ui/Loading";
import CategoryItem from "./CategoryItem";
import { useProjects } from "./../../../hooks/useProjects";

const CategoryLists = () => {
  const { isPending, rawCategories } = useCategories();
  const { projects } = useProjects();

  if (isPending) return <Loading />;
  if (!rawCategories?.length) return <p>دسته بندی وجود ندارد</p>;

  return (
    <section className="flex items-center gap-4 flex-wrap">
      {rawCategories?.map((item) => (
        <CategoryItem key={item?._id} item={item} projects={projects} />
      ))}
    </section>
  );
};

export default CategoryLists;
