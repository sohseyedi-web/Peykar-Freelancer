import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeUserStatusApi } from "../../service/adminService";

export const useChangeUserStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: changeUserStatus, isPending: isUpdating } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { changeUserStatus, isUpdating };
};
