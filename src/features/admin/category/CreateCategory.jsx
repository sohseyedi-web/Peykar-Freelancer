import React from "react";
import { useForm } from "react-hook-form";
import SelectField from "../../../ui/SelectField";
import TextField from "../../../ui/TextField";
import { useCreateCategory } from "./../useCreateCategory";
import { useEditCategory } from "./../useEditCategory";

const categoryTypes = [
  {
    id: 1,
    label: "محصول",
    value: "product",
  },
  {
    id: 2,
    label: "پست",
    value: "post",
  },
  {
    id: 3,
    label: "تیکت",
    value: "ticket",
  },
  {
    id: 4,
    label: "نظرات",
    value: "comment",
  },
];

const CreateCategory = ({ onClose, categoryToEdit = {} }) => {
  const { _id: categoryId } = categoryToEdit;
  const { englishTitle, title, description, type } = categoryToEdit;
  const isCategorySession = Boolean(categoryId);
  let editValues = {};

  if (isCategorySession) {
    editValues = {
      englishTitle,
      title,
      description,
      type,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });

  const { addCategory, isCreating } = useCreateCategory();
  const { editCategories, isUpdating } = useEditCategory();

  const onSubmit = async (data) => {
    const newCategory = { ...data };

    if (isCategorySession) {
      await editCategories(
        {
          id: categoryId,
          newCategory: {
            ...data,
          },
        },
        {
          onSuccess: () => onClose(),
        }
      );
    } else {
      await addCategory(newCategory, {
        onSuccess: () => onClose(),
      });
    }
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
      <SelectField
        label={"نوع دسته بندی"}
        name="type"
        register={register}
        required
        errors={errors}
        options={categoryTypes}
        validationSchema={{
          required: "نوع دسته بندی ضرروی است",
        }}
      />

      {isCategorySession ? (
        <button className="btn btn--primary w-full">
          {isUpdating ? "لطفا صبر کنید." : "تایید"}
        </button>
      ) : (
        <button className="btn btn--primary w-full">
          {isCreating ? "لطفا صبر کنید." : "تایید"}
        </button>
      )}
    </form>
  );
};

export default CreateCategory;
