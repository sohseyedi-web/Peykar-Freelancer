import { useSearchParams } from "react-router-dom";

const SelectFilter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField || "");

  const onChangeHandler = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <select className="selectField" value={value} onChange={onChangeHandler}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
