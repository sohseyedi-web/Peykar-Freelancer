import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProposalStatusApi } from "../../service/proposalService";

export const useChangeProjectStatus = () => {
  const { mutateAsync: changeProposalStatus, isPending: isUpdating } =
    useMutation({
      mutationFn: changeProposalStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { changeProposalStatus, isUpdating };
};
