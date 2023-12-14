import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProjectStatusApi } from "../../service/projectServie";

export const useToggleProjectStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: changeProjectStatus, isPending: isUpdating } =
    useMutation({
      mutationFn: changeProjectStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["owner-projects"],
        });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { changeProjectStatus, isUpdating };
};
