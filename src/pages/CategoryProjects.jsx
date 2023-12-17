import CategoryHeader from "./../features/admin/category/CategoryHeader";
import CategoryLists from "./../features/admin/category/CategoryLists";

const CategoryProjects = () => {
  return (
    <>
      <CategoryHeader />
      <hr className="border-slate-900 my-3" />
      <CategoryLists />
    </>
  );
};

export default CategoryProjects;
