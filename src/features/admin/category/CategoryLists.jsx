import { useCategories } from "../../../hooks/useCategories";
import Loading from "../../../ui/Loading";
import CategoryItem from "./CategoryItem";

const CategoryLists = () => {
  const { isPending, rawCategories } = useCategories();

  if (isPending) return <Loading />;
  if (!rawCategories?.length) return <p>دسته بندی وجود ندارد</p>;

  return (
    <section className="flex items-center gap-4 flex-wrap">
      {rawCategories?.map((item) => (
        <CategoryItem key={item?._id} item={item} />
      ))}
    </section>
  );
};

export default CategoryLists;
