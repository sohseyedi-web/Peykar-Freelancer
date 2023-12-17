import { useCategories } from "../../../hooks/useCategories";
import SelectFilter from "../../../ui/SelectFilter";

const sortOption = [
  { label: "مرتب سازی(جدیدترین)", value: "latest" },
  { label: "مرتب سازی(قدیمی ترین)", value: "earlist" },
];
const statusOption = [
  { label: "وضعیت(همه)", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSE" },
];

const ProjectHeader = () => {
  const { transformCategories } = useCategories();

  return (
    <div className="flex items-center justify-between gap-x-2">
      <h3 className="text-lg font-semibold">لیست پروژه ها</h3>
      <div className="flex items-center justify-between gap-x-4">
        <SelectFilter
          options={[
            {
              value: "ALL",
              label: "دسته بندی (همه)",
            },
            ...transformCategories,
          ]}
          filterField="category"
        />
        <SelectFilter filterField={"sort"} options={sortOption} />
        <SelectFilter filterField={"status"} options={statusOption} />
      </div>
    </div>
  );
};

export default ProjectHeader;
