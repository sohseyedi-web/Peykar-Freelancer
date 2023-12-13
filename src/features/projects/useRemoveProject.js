import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { removeProjectApi } from "../../service/projectServie";

export const useRemoveProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeProject };
};