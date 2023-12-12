import React from "react";
import RadioInput from "./RadioInput";

const RadioInputGroup = ({ register, watch, errors, configs }) => {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div dir="rtl" className="flex gap-x-4 w-full py-3">
      <div className="flex items-center gap-x-2 cursor-pointer">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            id={value}
            label={label}
            value={value}
            name={name}
            watch={watch}
            validationSchema={validationSchema}
            register={register}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-red-500 my-1">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default RadioInputGroup;
