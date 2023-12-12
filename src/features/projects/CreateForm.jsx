import { useForm } from "react-hook-form";
import SelectField from "../../ui/SelectField";
import TextField from "../../ui/TextField";
import { useCreateProject } from "./useCreateProject";
import { useCategories } from "../../hooks/useCategories";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import { useState } from "react";

const CreateForm = ({ onClose }) => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date(""));
  const { createProject, isCreating } = useCreateProject();
  const { categories, transformCategories } = useCategories();

  console.log(categories);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSumbit = async (data) => {
    const newData = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    await createProject(newData, {
      onSuccess: () => {
        onClose(), reset();
      },
    });
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
      <button className="btn btn--primary w-full">
        {isCreating ? "لطفا صبر کنید." : "تایید"}
      </button>
    </form>
  );
};

export default CreateForm;
