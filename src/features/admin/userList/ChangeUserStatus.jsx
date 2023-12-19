import React from "react";
import { useForm } from "react-hook-form";
import SelectField from "../../../ui/SelectField";
import { useChangeUserStatus } from "./../useChangeUserStatus";

const optionList = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید",
    value: 2,
  },
];

const ChangeUserStatus = ({ onClose, userId }) => {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const onSubmit = async (data) => {
    await changeUserStatus(
      { id: userId, data },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <SelectField
        label={"تغییر وضعیت"}
        name="status"
        register={register}
        required
        options={optionList}
      />
      <button className="btn btn--primary w-full">
        {isUpdating ? "لطفا صبر کنید" : "تایید"}
      </button>
    </form>
  );
};

export default ChangeUserStatus;
