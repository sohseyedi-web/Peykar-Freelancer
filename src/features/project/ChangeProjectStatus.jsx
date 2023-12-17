import React from "react";
import SelectField from "../../ui/SelectField";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useChangeProjectStatus } from "./useChangeProjectStatus";
import { useParams } from "react-router-dom";

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

const ChangeProjectStatus = ({ proposalId, onClose }) => {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdating } = useChangeProjectStatus();
  const queryClinet = useQueryClient();

  const onSubmit = async (data) => {
    await changeProposalStatus(
      {
        id: proposalId,
        data,
      },
      {
        onSuccess: () => {
          onClose();
          queryClinet.invalidateQueries({ queryKey: ["project", projectId] });
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

export default ChangeProjectStatus;
