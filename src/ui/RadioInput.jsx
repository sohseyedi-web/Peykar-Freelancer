import React from "react";

const RadioInput = ({ label, value, onChange, name, id, checked }) => {
  return (
    <div className="flex items-center gap-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        className="radio radio-accent w-4 h-4"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
