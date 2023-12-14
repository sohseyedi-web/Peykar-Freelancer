import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { useCreateProposal } from "./useCreateProposal";

const CreateProposal = ({ onClose, projectId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = async (data) => {
    await createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <form className="my-2 space-y-3" onSubmit={handleSubmit(onSubmit)}>
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
        name="price"
        placeHolder={"مثال : 1000000  "}
        required
        register={register}
        label="قیمت پروژه"
        type="number"
        validationSchema={{
          required: "قیمت پروژه ضرروی است",
        }}
      />
      <TextField
        errors={errors}
        name="duration"
        placeHolder={""}
        required
        type="number"
        register={register}
        label="مدت زمان پروژه"
        validationSchema={{
          required: "مدت زمان پروژه ضرروی است",
        }}
      />

      <button className="btn btn--primary w-full">
        {isCreating ? "لطفا صبر کنید." : "تایید"}
      </button>
    </form>
  );
};

export default CreateProposal;
