import { useCategories } from "../../../hooks/useCategories";
import SelectFilter from "../../../ui/SelectFilter";

const sortOption = [
  {
    value: "latest",
    label: "مرتب سازی (جدید ترین)",
  },
  {
    value: "earliest",
    label: "مرتب سازی (قدیمی ترین)",
  },
];
const statusOption = [
  { label: "وضعیت(همه)", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSE" },
];

const SubmitProjectHeader = () => {
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

export default SubmitProjectHeader;
