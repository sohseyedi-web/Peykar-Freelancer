import { useForm } from "react-hook-form";
import SelectField from "../../ui/SelectField";
import TextField from "../../ui/TextField";
import { useCreateProject } from "./useCreateProject";
import { useCategories } from "../../hooks/useCategories";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import { useState } from "react";
import { useEditProject } from "./useEditProject";

const CreateForm = ({ onClose, projectToEdit = {} }) => {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    tags: prevTags,
    deadline,
    category,
    description,
    budget,
  } = projectToEdit;
  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      category: category?._id,
      description,
      budget,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { createProject, isCreating } = useCreateProject();
  const { categories, transformCategories } = useCategories();
  const { editProject, isUpdating } = useEditProject();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ defaultValues: editValues });

  const onSumbit = async (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    if (isEditSession) {
      await editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } else {
      await createProject(newProject, {
        onSuccess: () => {
          onClose(), reset();
        },
      });
    }
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
      <SelectField
        validationSchema={{
          required: "دسته بندی پروژه ضروری است",
        }}
        label={"دسته بندی"}
        name={"category"}
        options={categories}
        register={register}
        required
      />
      <div>
        <label className="block mb-1 text-lg text-right" htmlFor="tags">
          تگ محصولات
        </label>
        <TagsInput
          id="tags"
          value={tags}
          onChange={setTags}
          name="tags"
          classNames={{ input: "" }}
        />
      </div>
      <DatePickerField date={date} setDate={setDate} />
      {isEditSession ? (
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

export default CreateForm;
