import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";
import { useCreateCategory } from "./../useCreateCategory";

const CreateCategory = ({ onClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { addCategory, isCreating } = useCreateCategory();

  const onSubmit = async (data) => {
    await addCategory(
      { ...data, type: "project" },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"عنوان دسته بندی"}
        name="title"
        register={register}
        required
        errors={errors}
        placeHolder="مثال : برنامه نویسی"
        validationSchema={{
          required: "عنوان دسته بندی ضرروی است",
        }}
      />
      <TextField
        label={"توضیحات"}
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
        label={"عنوان انگلیسی"}
        name="englishTitle"
        errors={errors}
        placeHolder={"مثال : design"}
        required
        register={register}
        validationSchema={{
          required: "عنوان انگلیسی ضرروی است",
        }}
      />
      <button className="btn btn--primary w-full">
        {isCreating ? "لطفا صبر کنید" : "تایید"}
      </button>
    </form>
  );
};

export default CreateCategory;
