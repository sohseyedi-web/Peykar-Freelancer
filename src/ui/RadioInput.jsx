const RadioInput = ({
  label,
  value,
  name,
  id,
  validationSchema,
  watch,
  register,
}) => {
  return (
    <div className="flex items-center gap-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        className="radio radio-accent w-4 h-4"
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />

      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
