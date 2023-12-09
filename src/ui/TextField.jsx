import React from "react";

const TextField = ({ name, label, onChange, value, placeHolder }) => {
  return (
    <>
      <label htmlFor={name} className="block mb-1 text-lg text-right">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField"
        placeHolder={placeHolder}
      />
    </>
  );
};

export default TextField;