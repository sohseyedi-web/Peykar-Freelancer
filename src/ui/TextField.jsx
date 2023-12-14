import React from "react";

const TextField = ({
  name,
  label,
  placeHolder,
  register,
  required,
  errors,
  validationSchema,
  type = "text",
}) => {
  return (
    <>
      <label htmlFor={name} className="block mb-1 text-lg text-right">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        {...register(name, validationSchema)}
        name={name}
        className="textField"
        placeHolder={placeHolder}
      />
      {errors && errors[name] && (
        <span className="text-red-500 my-1">{errors[name]?.message}</span>
      )}
    </>
  );
};

export default TextField;
