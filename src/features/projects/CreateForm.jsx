import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { useCreateProject } from "./useCreateProject";

const CreateForm = () => {
  const { createProject, isCreating } = useCreateProject();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSumbit = (data) => {
    console.log(data);
  };

  return (
    <form className="my-2 space-y-3" onSubmit={handleSubmit(onSumbit)}>
      <TextField
        errors={errors}
        name="title"
        placeHolder={"مثال : پروژه طراحی لوگو"}
        required
        register={register}
        label="عنوان پروژه"
        validationSchema={{
          required: "عنوان پروژه ضرروی است",
          minLength: {
            value: 10,
            message: "عنوان پروژه کوتاه است",
          },
        }}
      />
      <TextField
        label={"توضیحات "}
        name="description"
        errors={errors}
        placeHolder={"توضیحاتی درباره پروژه بنویسید"}
        required
        register={register}
        validationSchema={{
          required: "توضیحات ضرروی است",
          minLength: {
            value: 10,
            message: " توضیحات کوتاه است",
          },
        }}
      />
      <TextField
        errors={errors}
        name="budget"
        placeHolder={"مثال : 1000000  "}
        required
        register={register}
        label="مبلغ پروژه"
        validationSchema={{
          required: "مبلغ پروژه ضرروی است",
        }}
      />
      <button className="btn btn--primary w-full">
        {isCreating ? "لطفا صبر کنید." : "تایید"}
      </button>
    </form>
  );
};

export default CreateForm;
