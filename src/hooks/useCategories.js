import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../service/categoryService";
export const useCategories = () => {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories?.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const transformCategories = rawCategories?.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isPending, transformCategories, categories,rawCategories };
};
